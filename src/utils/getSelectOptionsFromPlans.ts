import { PlanOption } from "@/types/plan";
import { SelectOption } from "./input";

export const getSelectOptionsFromPlans = (plans: PlanOption[]): SelectOption[] => {
    const options: SelectOption[] = [];
    plans.forEach((plan) => {
        options.push({
            name: plan.name,
            value: plan.id,
        });
    });

    return options;
};
