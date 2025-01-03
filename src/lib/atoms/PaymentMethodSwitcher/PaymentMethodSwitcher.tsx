import { PaymentMethodType } from "@/types/plan";
import clsx from "clsx";
import { useState } from "react";

interface PaymentMethodTabsProps {
    setPaymentMethod: (value: PaymentMethodType) => void;
    paymentMethod: PaymentMethodType;
}

const PaymentMethodSwitcher = ({ setPaymentMethod, paymentMethod }: PaymentMethodTabsProps) => {
    const [yearlyHovered, setYearlyHovered] = useState<boolean>(false);
    const tabOptions = [
        {
            value: "payg",
            label: "Pay per image",
        },
        {
            value: "monthly",
            label: "Monthly",
        },
        {
            value: "yearly",
            label: "Yearly",
        },
    ];

    return (
        <div className="bg-white w-full dark:bg-[#222234] border border-defaultBorder/20 shadow-imageTypeButtonActive dark:shadow-none p-1 rounded-lg grid grid-cols-3 gap-1">
            {tabOptions.map((option, i) => {
                const { value, label } = option;
                return (
                    <button
                        key={`payment-method-tab-option-${i}-(${value})`}
                        className={clsx(
                            "py-3 px-3.5 text-center text-xs font-medium rounded border transition-colors duration-200 cursor-pointer relative",
                            paymentMethod === value
                                ? "border-defaultBorder/30 bg-foreground"
                                : "border-defaultBorder/20 bg-white dark:bg-[#222234] desktop:hover:bg-foreground",
                        )}
                        onClick={() => setPaymentMethod(value as PaymentMethodType)}
                        onMouseEnter={() => setYearlyHovered(value === "yearly")}
                        onMouseLeave={() => setYearlyHovered(false)}
                    >
                        {label}
                        {value === "yearly" && (
                            <span
                                className={clsx(
                                    "absolute -top-2 -right-2 tablet-landscape::static",
                                    "text-sx bg-foreground shadow-imageTypeButtonActive py-[1px] px-1.5 rounded-lg ml-2 transition-colors duration-200",
                                    (yearlyHovered || paymentMethod === value) && "dark:bg-[#222234] bg-white",
                                )}
                            >
                                -20%
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export { PaymentMethodSwitcher };
