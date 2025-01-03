import { CurrencyCode } from "@/types/currency";

export const getCurrencySymbolFromCode = (currency: CurrencyCode) => {
    switch (currency) {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        case "GBP":
            return "£";
    }
};
