import { CurrencyCode } from "./currency";

export type PlanOption = {
    name: string;
    id: string;
    price: number;
    currency: CurrencyCode;
    description: string;
    secondDescription?: string;
};

export type PaymentMethodType = "payg" | "monthly" | "yearly";
