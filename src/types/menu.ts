export type MenuItemCategory = "espresso" | "coldbrew" | "seasonal" | "bakery" | "hot" | "iced" | "blended";

export interface MenuItem {
    id: string;
    name: string;
    price: number;
    description: string;
    category: MenuItemCategory;
    image: string;
}

export interface CustomCartItem {
    id: string; 
    item: MenuItem;
    quantity: number;
    size: "small" | "medium" | "large";
    milk: "whole" | "oat" | "almond" | "coconut";
    addons: string[];
    instructions: string;
    finalPrice: number;
    isReward?: boolean;
    rewardPointsCost?: number;
    isGiftCard?: boolean;
}
