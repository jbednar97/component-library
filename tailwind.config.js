// const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.tsx"],
    refix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        screens: {
            "mobile-landscape": "36rem",
            tablet: "48rem",
            "tablet-landscape": "64rem",
            desktop: "80rem",
            "large-desktop": "90rem",
            fullhd: "120rem",
        },
        extend: {
            colors: {
                background: "hsla(var(--background))",
                foreground: "hsla(var(--foreground))",
                turquoise: "hsla(var(--turquoise),<alpha-value>)",
                darkBlue: "hsla(var(--dark-blue),<alpha-value>)",
                surface: "hsla(var(--surface),<alpha-value>)",
                // Texts
                textColor: "hsl(var(--text-color),<alpha-value>)",
                uppyTextColor: "hsl(var(--uppy-text-color),<alpha-value>)",

                // Borders
                borderPrimaryBtn: "hsla(var(--border-primary-btn))",
                borderSecondaryBtn: "hsla(var(--border-secondary-btn))",
                defaultBorder: "hsl(var(--default-border),<alpha-value>)",

                // primary: {
                //     DEFAULT: "hsla(var(--primary))",
                //     foreground: "hsla(var(--primary-foreground))",
                // },
            },
            backgroundImage: {
                "gradient-loader":
                    "linear-gradient(to right, rgba(37, 219, 189, 0.70), rgba(119, 191, 246, 1), rgba(94, 199, 229, 1))",
                gradient:
                    "linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)",
                gradientHover:
                    "linear-gradient(145.37deg, rgba(255, 255, 255, 0.1) -8.75%, rgba(255, 255, 255, 0.057) 83.95%)",
                shine: "linear-gradient(45deg, rgba(255,255,255,0) 45%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 55%,rgba(255,255,255,0) 100%)",
                carouselCard: "linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(35, 33, 117, 0.5) 100%)",
            },
            fontSize: {
                sm: ["0.875rem", "1.25rem"],
                smPlus: ["0.9375rem", "1.5rem"],
            },
            borderRadius: {
                default: "var(--radius)",
            },
            boxShadow: {
                default: "0px 1px 2px 0px rgba(164, 172, 185, 0.32)",
                imageTypeButton: "0 1px 1px 0 hsla(217, 13%, 68%, 0.2)",
                imageTypeButtonActive: "0 1px 1px 0 hsla(217, 13%, 68%, 0.32)",
                uploadBoxLight: "0px 1px 2px 0px rgba(164, 172, 185, 0.32)",
                uploadBoxDark: "0px 1px 2px 0px rgba(0, 0, 0, 0.32)",
                orderDetailMenuLight: "0px -4px 44px 0px rgba(164, 172, 185, 0.12)",
                orderDetailMenuDark: "0px -4px 44px 0px rgba(0, 0, 0, 0.12)",
                checkmark: "0px 1px 2px 0px #A4ACB966",
                switch: "0px 1px 2px 0px #23217566",
                cardImage: "0 16px 16px 0 rgba(164, 172, 187, 0.32)",
            },
            transitionDuration: {
                400: "400ms",
            },
            transitionProperty: {
                maxHeight: "max-height",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                shimmer: {
                    "0%": {
                        backgroundColor: "#f0f0f0",
                    },
                    "50%": {
                        backgroundColor: "#e0e0e0",
                    },
                    "100%": {
                        backgroundColor: "#f0f0f0",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
