import { useState, type FC } from "react";

import { CTAWithLink, MethodAndCurrencySwitcher, SubscriptionCardsGroup } from "@/lib";
import "./index.css";
import { PaymentMethodType } from "@/types/plan";

const App: FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>("monthly");
    return (
        <div className="w-full">
            <MethodAndCurrencySwitcher
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                activeCurrency="EUR"
                setActiveCurrency={() => {}}
            />
            <SubscriptionCardsGroup paymentMethod={paymentMethod} bigPAYGCard />
            <CTAWithLink
                text="Try all features from our essential plan for free with watermarked enhancements"
                link={{
                    text: "Get started",
                    href: "/",
                    subText: "No credit card required",
                    external: false,
                }}
            />
        </div>
    );
};

export default App;
