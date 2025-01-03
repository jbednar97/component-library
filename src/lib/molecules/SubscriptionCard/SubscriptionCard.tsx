import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Heading } from "../../atoms/Heading/Heading";
import { Select } from "../../atoms/Inputs/Select/Select";
import { Button } from "../../atoms/Button/Button";
import { CheckmarkWithText } from "../../atoms/CheckmarkWithText/CheckmarkWithText";

import { PlanOption } from "@/types/plan";
import { getSelectOptionsFromPlans } from "@/utils/getSelectOptionsFromPlans";
import { getCurrencySymbolFromCode } from "@/utils/getCurrencySymbolFromCode";

import clsx from "clsx";

interface SubscriptionCardProps {
    highlighted?: boolean;
    title: string;
    description: string;
    benefits: string[];
    planOptions: PlanOption[];
    submitHandler: (planId: string) => void;
}

const SubscriptionCard = ({
    highlighted,
    planOptions,
    benefits,
    title,
    description,
    submitHandler,
}: SubscriptionCardProps) => {
    const { register, watch, handleSubmit } = useForm<{ planId: string }>();
    const [currentPlan, setCurrentPlan] = useState<PlanOption | null>(planOptions[0]);
    const currentPlanId = watch("planId");
    const formOptions = getSelectOptionsFromPlans(planOptions);

    useEffect(() => {
        if (currentPlanId) {
            const plan = planOptions.find((plan) => plan.id === currentPlanId) || null;
            setCurrentPlan(plan);
        }
    }, [currentPlanId]);

    const onSubmit: SubmitHandler<{ planId: string }> = async ({ planId }) => {
        submitHandler(planId);
    };
    return (
        <div
            className={clsx(
                "border bg-white dark:bg-[#222234] p-6 rounded-lg relative",
                highlighted
                    ? "border-2 border-turquoise"
                    : "border-textColor/5 shadow-uploadBoxLight dark:shadow-uploadBoxDark",
            )}
        >
            {highlighted && (
                <span className="absolute -top-3 -right-3 bg-[#6C90D7] text-xs font-bold px-4 py-1 text-white rounded-lg">
                    Recommended
                </span>
            )}
            <Heading tag="h2" className="text-xl font-bold w-full text-center mb-2">
                {title}
            </Heading>
            <p className="text-xs text-center mb-3">{description}</p>
            <span className="block text-xl font-bold text-center w-full mb-3">
                <span className="text-3xl">
                    {getCurrencySymbolFromCode(currentPlan?.currency || "USD") + currentPlan?.price}
                </span>{" "}
                / month
            </span>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center w-full">
                <div className="w-full">
                    <Select options={formOptions} register={register} name="planId" />
                </div>
                <div className="mt-2.5 mb-5 text-xs text-center">
                    <p className="mb-1">{currentPlan?.description}</p>
                    {currentPlan?.secondDescription && <p>{currentPlan?.secondDescription}</p>}
                </div>
                <Button type="submit" variant={highlighted ? "turquoise" : "default"}>
                    Get started
                </Button>
                <div className="mt-8 w-full grid gap-1">
                    {benefits.map((text, i) => (
                        <CheckmarkWithText text={text} key={`benefit-${i}-${text}-${currentPlan?.id}`} />
                    ))}
                </div>
            </form>
        </div>
    );
};

export { SubscriptionCard };
