import { Heading } from "../../atoms/Heading/Heading";
import { Button } from "../../atoms/Button/Button";
import { CheckmarkWithText } from "../../atoms/CheckmarkWithText/CheckmarkWithText";

import { CurrencyCode } from "@/types/currency";
import { getCurrencySymbolFromCode } from "@/utils/getCurrencySymbolFromCode";
import { SubscriptionCardButton } from "@/types/subscriptionCardButton";

interface PAYGCardProps {
    benefits: string[];
    currency: CurrencyCode;
    perImagePrice: number;
    button: SubscriptionCardButton;
}

const PAYGCard = ({ benefits, perImagePrice, currency, button }: PAYGCardProps) => {
    const { text, onClick } = button;
    return (
        <div
            className={
                "border bg-white dark:bg-[#222234] p-6 rounded-lg relative border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark max-w-[18.75rem]"
            }
        >
            <Heading tag="h2" className="text-xl font-bold w-full text-center mb-2">
                Pay per image
            </Heading>
            <p className="text-xs text-center mb-3">Enhance images whenever you need and pay as you go</p>
            <span className="block text-xl font-bold text-center w-full mb-3">
                <span className="text-3xl">{getCurrencySymbolFromCode(currency) + perImagePrice}</span> / image
            </span>
            <div className="w-full flex justify-center items-center">
                <Button variant={"default"} className="my-8" onClick={onClick}>
                    {text}
                </Button>
            </div>
            <div className="mt-8 w-full grid gap-1">
                {benefits.map((text, i) => (
                    <CheckmarkWithText text={text} key={`benefit-${i}-${text}`} />
                ))}
            </div>
        </div>
    );
};

export { PAYGCard };
