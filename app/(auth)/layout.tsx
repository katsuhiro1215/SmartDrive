import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <section className="hidden bg-brand p-10 w-1/2 items-center justify-center lg:flex xl:w-2/5">
                <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                    <Image
                        src="/logo.svg"
                        alt="Smart Storage Logo"
                        width={160}
                        height={82}
                        className="h-auto"
                    />

                    <div className="space-y-5 text-white">
                        <h1 className="h1">Manage your files the best way</h1>
                        <p className="body-1">
                            This is a place where you can store all your
                            documents.
                        </p>
                    </div>
                    <Image
                        src="/data.png"
                        alt="Illustration"
                        width={320}
                        height={320}
                        className="transition-all hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>
            <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hidden">
                    <Image
                        src="/logo.svg"
                        alt="Smart Storage Logo"
                        width={160}
                        height={82}
                        className="h-auto w-[200px] lg:w-[250px]"
                    />
                </div>
                {children}
            </section>
        </div>
    );
};

export default layout;
