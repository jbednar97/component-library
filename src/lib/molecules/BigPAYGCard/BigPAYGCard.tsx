// Start of Selection
import { Heading } from "../../atoms/Heading/Heading";
import { Button } from "../../atoms/Button/Button";
import { CheckmarkWithText } from "../../atoms/CheckmarkWithText/CheckmarkWithText";

import { CurrencyCode } from "@/types/currency";
import { getCurrencySymbolFromCode } from "@/utils/getCurrencySymbolFromCode";
import { SubscriptionCardButton } from "@/types/subscriptionCardButton";

import heroAfter from "@/assets/images/hero-after.jpg";
import heroBefore from "@/assets/images/hero-before.jpg";

interface BigPAYGCardProps {
    benefits: string[];
    currency: CurrencyCode;
    perImagePrice: number;
    button: SubscriptionCardButton;
}

const BigPAYGCard = ({ benefits, perImagePrice, currency, button }: BigPAYGCardProps) => {
    const { text, onClick } = button;
    return (
        <div
            className={
                "flex flex-row gap-16 tablet-landscape:gap-[6.25rem] justify-center items-center border bg-white dark:bg-[#222234] p-6 rounded-lg relative border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark "
            }
        >
            <div className="max-w-[16.375rem]">
                <Heading tag="h2" className="text-xl font-bold w-full text-center mb-2">
                    Pay per image
                </Heading>
                <p className="text-xs text-center mb-3">Enhance images whenever you need and pay as you go</p>
                <span className="block text-xl font-bold text-center w-full mb-3">
                    <span className="text-3xl">{getCurrencySymbolFromCode(currency) + perImagePrice}</span> / image
                </span>
                <p className="text-xs text-center mb-3 font-bold opacity-80">
                    Downloaded images are invoiced at the end of the month
                </p>
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
            <div className="hidden tablet:block">
                <div className="w-[18.9375rem] h-[13.5rem] relative rounded-[1.5rem] overflow-hidden -rotate-1 shadow-cardImage">
                    <span className="text-xs text-white font-medium py-1 px-2 rounded-[1.5rem] bg-black/70 absolute top-4 left-4">
                        Before
                    </span>
                    <img src={heroBefore} alt="Hero Before" className="w-full h-full" />
                </div>
                <div className="w-[18.9375rem] h-[13.5rem] relative rounded-[1.5rem] overflow-hidden -mt-[6.25rem] rotate-1 ml-[4.5rem] shadow-cardImage">
                    <span className="text-xs text-white font-medium py-1 px-2 rounded-[1.5rem] bg-black/70 absolute top-4 left-4">
                        After
                    </span>
                    <img src={heroAfter} alt="Hero After" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export { BigPAYGCard };
