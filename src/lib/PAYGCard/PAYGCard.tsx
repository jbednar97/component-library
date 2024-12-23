import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { CheckmarkWithText } from "../CheckmarkWithText/CheckmarkWithText";

interface PAYGCardProps {}

const PAYGCard = ({}: PAYGCardProps) => {
    const benefits = [
        "Export up to 8K resolution",
        "Chat/mail support",
        "Images saved for 90 days",
        "Core presets",
        "API & Webhooks",
    ];
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
                <span className="text-3xl">$0.99</span> / image
            </span>
            <div className="w-full flex justify-center items-center">
                <Button variant={"default"} className="my-8" onClick={() => alert("Workingggg")}>
                    Enter payment details
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
