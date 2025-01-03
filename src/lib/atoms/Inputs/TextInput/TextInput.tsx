import { ReactElement, useEffect, useState } from "react";
import styles from "./TextInput.module.scss";
import clsx from "clsx";
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputProps<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>;
    label?: string;
    initialValue?: string;
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    validation?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
    placeholder?: string;
    className?: string;
    valueAddition?: string;
    disabled?: boolean;
    staticValue?: string;
    onChange?: (value: string) => void;
    type?: "text" | "email";
}

const TextInput = <TFieldValues extends FieldValues>({
    name,
    label,
    initialValue,
    register,
    errors,
    validation,
    placeholder,
    className,
    valueAddition,
    disabled,
    staticValue,
    onChange,
    type = "text",
}: TextInputProps<TFieldValues>): ReactElement | null => {
    const [value, setValue] = useState<string>(initialValue || "");

    useEffect(() => {
        setValue(initialValue || "");
    }, [initialValue]);

    return (
        <div className="w-full flex flex-col relative">
            {label && (
                <label htmlFor={name as string} className="text-sm mb-2.5 font-medium">
                    {label}
                </label>
            )}

            <input
                className={clsx(
                    styles.input,
                    valueAddition === "zip" && styles.zip,
                    "bg-white dark:bg-[#222234] py-1",
                    errors[name] && "border-[#123769] border-opacity-5 dark:border-white dark:border-opacity-15",
                    errors[name] && "focus:border-opacity-20 active:border-opacity-20",
                    errors[name] && "dark:focus:border-opacity-40 dark:active:border-opacity-40",
                    errors[name] && "border-red-600 dark:border-red-600 border-opacity-80 dark:border-opacity-80",
                    className,
                )}
                type={type}
                value={staticValue ? staticValue : value}
                id={name as string}
                placeholder={placeholder || ""}
                disabled={disabled}
                {...register(name, {
                    ...validation,
                    onChange: (e) => {
                        setValue(e.target.value);
                        onChange && onChange(e.target.value);
                    },
                })}
            />
            {valueAddition && value.length > 0 && (
                <span className="absolute left-0 overflow-hidden w-full bottom-4 rounded-md border border-opacity-0 text-sm font-medium py-2 px-4 pointer-events-none ">
                    <span className="opacity-0 -ml-1">{value}</span>
                    {valueAddition}
                </span>
            )}
        </div>
    );
};

export { TextInput };
