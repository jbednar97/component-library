"use client";
import { ReactElement } from "react";
import styles from "./Select.module.scss";
import { UseFormRegister } from "react-hook-form";
import clsx from "clsx";

interface SelectProps {
    options: {
        name: string;
        value: string;
    }[];
    register: UseFormRegister<any>;
    name: string;
    label?: string;
    requiredMessage?: string;
    defaultMessage?: string;
}

const Select = ({
    options,
    register,
    name = "value",
    label,
    requiredMessage,
    defaultMessage,
}: SelectProps): ReactElement | null => {
    return (
        <div>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                </label>
            )}
            <div className={clsx(styles.wrapper)}>
                <select
                    className={clsx(styles.select, "bg-white dark:bg-[#222234]")}
                    {...register(name, {
                        required: requiredMessage ? true : false,
                    })}
                    id={name}
                >
                    {defaultMessage && (
                        <option value={""} disabled selected>
                            {defaultMessage}
                        </option>
                    )}
                    {options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export { Select };
