import { BigPAYGCard } from "@/lib/molecules/BigPAYGCard/BigPAYGCard";
import { PAYGCard } from "@/lib/molecules/PAYGCard/PAYGCard";
import { SubscriptionCard } from "@/lib/molecules/SubscriptionCard/SubscriptionCard";
import { SubscriptionContactForm } from "@/lib/molecules/SubscriptionContactForm/SubscriptionContactForm";
import { PaymentMethodType } from "@/types/plan";

interface SubscriptionCardsGroupProps {
    paymentMethod: PaymentMethodType;
    bigPAYGCard: boolean;
}

const SubscriptionCardsGroup = ({ paymentMethod, bigPAYGCard }: SubscriptionCardsGroupProps) => {
    const renderCorectCards = () => {
        if (paymentMethod === "payg" && !bigPAYGCard) {
            return (
                <div className="w-full flex justify-center items-center mt-14 max-w-[81.25rem] mx-auto">
                    <PAYGCard
                        benefits={[
                            "Export up to 8K resolution",
                            "Chat/mail support",
                            "Images saved for 90 days",
                            "Core presets",
                            "API & Webhooks",
                        ]}
                        button={{
                            text: "Get started",
                            onClick: () => {
                                console.log("Clicked");
                            },
                        }}
                        currency={"EUR"}
                        perImagePrice={0.01}
                    />
                </div>
            );
        } else if (paymentMethod === "payg" && bigPAYGCard) {
            return (
                <div className="w-full flex justify-center items-center mt-14 max-w-[81.25rem] mx-auto">
                    <BigPAYGCard
                        benefits={[
                            "Export up to 8K resolution",
                            "Chat/mail support",
                            "Images saved for 90 days",
                            "Core presets",
                            "API & Webhooks",
                        ]}
                        button={{
                            text: "Get started",
                            onClick: () => {
                                console.log("Clicked");
                            },
                        }}
                        currency={"EUR"}
                        perImagePrice={0.01}
                    />
                </div>
            );
        } else {
            return (
                <div className="w-full grid grid-cols-1 tablet:grid-cols-2 tablet-landscape:grid-cols-3 desktop:grid-cols-4 mt-14 gap-5 max-w-[81.25rem] mx-auto">
                    <SubscriptionCard
                        title={"Essential"}
                        description={"The plan for individuals, real estate agents and freelance photographers"}
                        benefits={[
                            "Export up to 8K resolution",
                            "Chat/mail support",
                            "Images saved for 90 days",
                            "Core presets",
                            "API & Webhooks",
                        ]}
                        planOptions={[
                            {
                                name: "50 images included",
                                id: "50",
                                price: 50,
                                currency: "EUR",
                                description: "Additional images for $0.78",
                                secondDescription: "Take unused credits to next month",
                            },
                            {
                                name: "100 images included",
                                id: "100",
                                price: 100,
                                currency: "EUR",
                                description: "Additional images for $188",
                                secondDescription: "Take unused credits to next month",
                            },
                        ]}
                        submitHandler={(planId) => {
                            console.log(planId);
                        }}
                    />
                    <SubscriptionCard
                        title={"Essential"}
                        description={"The plan for individuals, real estate agents and freelance photographers"}
                        benefits={[
                            "Export up to 8K resolution",
                            "Chat/mail support",
                            "Images saved for 90 days",
                            "Core presets",
                            "API & Webhooks",
                        ]}
                        planOptions={[
                            {
                                name: "50 images included",
                                id: "50",
                                price: 50,
                                currency: "EUR",
                                description: "Additional images for $0.78",
                                secondDescription: "Take unused credits to next month",
                            },
                            {
                                name: "100 images included",
                                id: "100",
                                price: 100,
                                currency: "EUR",
                                description: "Additional images for $188",
                                secondDescription: "Take unused credits to next month",
                            },
                        ]}
                        submitHandler={(planId) => {
                            console.log(planId);
                        }}
                    />
                    <SubscriptionCard
                        title={"Essential"}
                        description={"The plan for individuals, real estate agents and freelance photographers"}
                        benefits={[
                            "Export up to 8K resolution",
                            "Chat/mail support",
                            "Images saved for 90 days",
                            "Core presets",
                            "API & Webhooks",
                        ]}
                        planOptions={[
                            {
                                name: "50 images included",
                                id: "50",
                                price: 50,
                                currency: "EUR",
                                description: "Additional images for $0.78",
                                secondDescription: "Take unused credits to next month",
                            },
                            {
                                name: "100 images included",
                                id: "100",
                                price: 100,
                                currency: "EUR",
                                description: "Additional images for $188",
                                secondDescription: "Take unused credits to next month",
                            },
                        ]}
                        submitHandler={(planId) => {
                            console.log(planId);
                        }}
                    />
                    <SubscriptionContactForm />
                </div>
            );
        }
    };
    return renderCorectCards();
};

export { SubscriptionCardsGroup };
