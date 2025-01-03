import CurrencySwitcher from "@/lib/atoms/CurrencySwitcher/CurrencySwitcher";
import { PaymentMethodSwitcher } from "@/lib/atoms/PaymentMethodSwitcher/PaymentMethodSwitcher";
import { CurrencyCode } from "@/types/currency";
import { PaymentMethodType } from "@/types/plan";

interface MethodAndCurrencySwitcherProps {
    paymentMethod: PaymentMethodType;
    setPaymentMethod: (value: PaymentMethodType) => void;
    activeCurrency: CurrencyCode;
    setActiveCurrency: (currency: CurrencyCode) => void;
}

const MethodAndCurrencySwitcher = ({
    paymentMethod,
    setPaymentMethod,
    activeCurrency,
    setActiveCurrency,
}: MethodAndCurrencySwitcherProps) => {
    return (
        <div className="w-full tablet:flex tablet:justify-between tablet-landscape:grid tablet-landscape:grid-cols-3 max-w-[81.25rem] mx-auto">
            <div className="hidden tablet-landscape:block w-0 tablet-landscape:w-full"></div>
            <PaymentMethodSwitcher setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod} />
            <CurrencySwitcher activeCurrency={activeCurrency} setActiveCurrency={setActiveCurrency} />
        </div>
    );
};

export { MethodAndCurrencySwitcher };
