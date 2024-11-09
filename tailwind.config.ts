import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	fontFamily: {
    		poppins: ["var(--font-poppins)"]
    	},
    	extend: {
    		colors: {
    			brand: {
    				'100': '#EF6365',
    				DEFAULT: '#FA7275'
    			},
    			red: 'FF7474',
    			error: '#B80000',
    			green: '#3DD983',
    			blue: '#56B8FF',
    			pink: '#EEA9FD',
    			orange: 'F9AB72',
    			light: {
    				'100': '#333F4E',
    				'200': '#A3B2C7',
    				'300': '#F2F5F9',
    				'400': '#F2F4F8'
    			},
    			dark: {
    				'100': '#04050C',
    				'200': '#131524'
    			},
    			boxShadow: {
    				'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
    				'drop-2': '0px 8px 30px 0px rgba(65, 89, 214, 0.3)',
    				'drop-3': '0px 8px 30px 0px rgba(65, 89, 214, 0.1)'
    			},
    			borderRadius: {
    				lg: 'var(--radius)',
    				md: 'calc(var(--radius) - 2px)',
    				sm: 'calc(var(--radius) - 4px)'
    			},
    			keyframes: {
    				'caret-blink': {
    					'0%, 70%, 100%': {
    						opacity: '1'
    					},
    					'20%, 50%': {
    						opacity: '0'
    					}
    				}
    			},
    			animation: {
    				'caret-blink': 'caret-blink 1.25s ease-out infinite'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
