import { Button } from "../../atoms/Button/Button";

interface CTAWithButtonProps {}

const CTAWithButton = ({}: CTAWithButtonProps) => {
    return (
        <div className="mt-8 border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark rounded-[1rem] bg-foreground px-8 py-6 w-full max-w-[67.85rem] mx-auto">
            <div className="flex flex-col tablet:flex-row items-center justify-between gap-4">
                <span className="text-xl font-bold w-full text-center">Need more than 10,000 images a month?</span>
                <Button variant={"secondary"}>Contact us</Button>
            </div>
        </div>
    );
};

export { CTAWithButton };
