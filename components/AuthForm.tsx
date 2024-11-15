"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import OTPModal from "./OTPModal";

const formSchema = z.object({
    username: z.string().min(2).max(50),
});

type FormType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: FormType }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [accountId, setAccountId] = useState(null);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // console.log(values);
        setIsLoading(true);
        setErrorMessage("");

        try {
            const user = await createAccount({fullName, email}: {
                fullName: values.fullName || "",
                email: values.email,
            })
    
            setAccountId(user.accountId);
        } catch {
            setErrorMessage("Failed to create an account. Please try again.");
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="auth-form"
                >
                    <h1 className="form-title">{type === "sign-in" ? "Sign In" : "Sign Up"}</h1>
                    { type === 'sign-up' } <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            {/* OTP Verification */}

            {accountId && (
              <OTPModal email={form.getValues("email")} accountId={accountId} />
            )}
        </>
    );
};

export default AuthForm;
