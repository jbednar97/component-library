interface CTAWithLinkProps {
    text: string;
    link: {
        href: string;
        text: string;
        subText: string;
        external: boolean;
    };
}
const CTAWithLink = ({ text, link }: CTAWithLinkProps) => {
    return (
        <div className="mt-8 border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark rounded-[1rem] bg-[#22DDBB]/10 px-8 py-6 w-full max-w-[67.85rem] mx-auto">
            <div className="flex flex-col tablet:flex-row items-center justify-between gap-4">
                <span className="text-xl font-bold w-full text-center">{text}</span>
                <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="bg-[#5FB1A3] leading-[20px] desktop:hover:bg-[#3b756b] transition-colors duration-200 text-white flex flex-col items-center justify-center px-8 py-1 font-bold rounded-lg"
                >
                    {link.text}
                    <span className="text-xs font-normal text-nowrap leading-[14px]">{link.subText}</span>
                </a>
            </div>
        </div>
    );
};

export { CTAWithLink };
