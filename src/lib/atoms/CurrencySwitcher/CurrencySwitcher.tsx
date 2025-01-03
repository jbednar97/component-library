import { CurrencyCode } from "@/types/currency";
import clsx from "clsx";

interface CurrencySwitcherProps {
    activeCurrency: CurrencyCode;
    setActiveCurrency: (currency: CurrencyCode) => void;
    inModal?: boolean;
}

const CurrencySwitcher = ({ activeCurrency, setActiveCurrency, inModal }: CurrencySwitcherProps) => {
    const currencies = [
        {
            label: "$ USD",
            value: "USD",
        },
        {
            label: "€ EUR",
            value: "EUR",
        },
        {
            label: "£ GBP",
            value: "GBP",
        },
    ];
    return (
        <div className={clsx("w-full flex justify-center mt-2 tablet:mt-0", !inModal && "tablet:justify-end")}>
            <div className="bg-white dark:bg-[#222234] border border-defaultBorder/20 shadow-imageTypeButtonActive dark:shadow-none p-1 rounded-lg grid grid-cols-3 gap-1">
                {currencies.map((currency) => {
                    const { value, label } = currency;
                    return (
                        <button
                            key={value}
                            className={clsx(
                                "py-3 px-3.5 text-center text-xs font-medium rounded border transition-colors duration-200 cursor-pointer",
                                activeCurrency === value
                                    ? "border-defaultBorder/30 bg-foreground"
                                    : "border-defaultBorder/20 bg-white dark:bg-[#222234] desktop:hover:bg-foreground",
                            )}
                            onClick={() => setActiveCurrency(value as CurrencyCode)}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CurrencySwitcher;
