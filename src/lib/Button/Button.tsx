import * as React from "react";
import clsx from "clsx";

const buttonStyles = {
    base: "inline-flex items-center justify-center whitespace-nowrap font-bold rounded-md text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        default:
            "bg-white text-textColor shadow-default border border-border desktop:hover:bg-darkBlue desktop:hover:text-white desktop:hover:border-borderSecondaryBtn dark:bg-[rgb(57,57,73)] dark:shadow-none dark:border-[rgb(57,57,73)] desktop:dark:hover:bg-borderPrimaryBtn",
        destructive: "bg-red-500 text-white desktop:hover:bg-red-500/90",
        secondary:
            "bg-darkBlue text-white desktop:hover:bg-primary desktop:hover:bg-opacity-80 dark:bg-turquoise/80 desktop:dark:hover:bg-turquoise/60 dark:border-borderSecondaryBtn",
        loading:
            "bg-darkBlue text-white desktop:hover:bg-primary overflow-hidden desktop:hover:bg-opacity-80 dark:bg-[rgb(57,57,73)] dark:shadow-none dark:border-[rgb(57,57,73)] desktop:dark:hover:bg-borderPrimaryBtn disabled:opacity-100",
        turquoise: "bg-[#5FB1A3] text-white desktop:hover:bg-[#2A7A6C]",
    },
    sizes: {
        default: "px-3 py-2",
    },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: keyof typeof buttonStyles.variants;
    size?: keyof typeof buttonStyles.sizes;
    progress?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, progress, children, ...props }, ref) => {
        const Comp = "button";
        const variantStyles = buttonStyles.variants[variant] || "";
        const sizeStyles = buttonStyles.sizes[size] || "";

        return (
            <Comp
                className={clsx(
                    buttonStyles.base,
                    variantStyles,
                    sizeStyles,
                    className,
                    progress && progress > 0 && "relative",
                )}
                ref={ref}
                {...props}
            >
                {progress && progress > 0 ? (
                    <>
                        <div
                            className="h-full bg-gradient-loader absolute top-0 left-0 transition-all duration-200"
                            style={{ width: `${progress}%` }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                            Uploading progress {progress}%
                        </div>
                        <p className="opacity-0">Uploading</p>
                    </>
                ) : (
                    children
                )}
            </Comp>
        );
    },
);

Button.displayName = "Button";

export { Button };
