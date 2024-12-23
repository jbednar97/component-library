import { Icon } from "../Icon/Icon";

interface CheckmarkWithTextProps {
    text: string;
}

const CheckmarkWithText = ({ text }: CheckmarkWithTextProps) => {
    return (
        <div className="flex items-center justify-start w-full">
            <Icon name="checkmark-circle-colored" className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-xs font-bold opacity-50">{text}</span>
        </div>
    );
};

export { CheckmarkWithText };
