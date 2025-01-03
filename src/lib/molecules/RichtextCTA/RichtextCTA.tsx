import React from "react";

interface RichtextCTAProps {
    richText: string;
}

const RichtextCTA: React.FC<RichtextCTAProps> = ({ richText }) => {
    return (
        <div className="my-8 border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark rounded-[1rem] bg-[#E5F9F6] dark:bg-turquoise/80 px-8 py-6 w-full max-w-[67.85rem] mx-auto">
            <div className="flex flex-col tablet:flex-row items-center justify-between gap-4">
                <span dangerouslySetInnerHTML={{ __html: richText }} />
            </div>
        </div>
    );
};

export { RichtextCTA };
