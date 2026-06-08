"use client";
import React, { useState } from "react";
import { Star, Gift, Plus, ToggleLeft, ToggleRight, Sparkles } from "lucide-react";

interface RewardOffer {
    id: string;
    title: string;
    description: string;
    starsRequired: number;
    active: boolean;
}

const initialOffers: RewardOffer[] = [
    { id: "R-01", title: "Free Espresso Shot", description: "Redeem for any single espresso shot, including decaf options.", starsRequired: 40, active: true },
    { id: "R-02", title: "Fresh Butter Croissant", description: "Get a warm flaky classic butter croissant fresh from the oven.", starsRequired: 80, active: true },
    { id: "R-03", title: "Any Hot Drink (Large)", description: "Redeem for a large size of any of our specialty hot drinks.", starsRequired: 120, active: true },
    { id: "R-04", title: "Free Retail Coffee Beans Bag", description: "Redeem for one 250g bag of our signature single-origin beans.", starsRequired: 400, active: true },
    { id: "R-05", title: "10% Off Entire Order", description: "Applies 10% discount to all items in your cart at checkout.", starsRequired: 150, active: false },
    { id: "R-06", title: "Free Latte Art Masterclass Ticket", description: "Get one VIP pass to our weekend barista-led Latte Art training session.", starsRequired: 1000, active: true },
];

export default function RewardsPage() {
    const [offers, setOffers] = useState<RewardOffer[]>(initialOffers);

    const toggleOffer = (id: string) => {
        setOffers(prev => prev.map(o => 
            o.id === id ? { ...o, active: !o.active } : o
        ));
    };

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-background min-h-screen text-foreground">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight">Rewards & Campaigns</h1>
                    <p className="text-sm text-muted-foreground mt-1">Configure stars requirement and loyalty offers for your customers</p>
                </div>

                <button 
                    onClick={() => alert("Add Reward Campaign flow...")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/95 active:scale-[0.98] transition-all shadow-md shadow-primary/10 text-sm w-fit"
                >
                    <Plus className="w-4 h-4" />
                    New Campaign
                </button>
            </header>

            {/* Campaign Summary stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-card p-5 rounded-2xl border border-border/80 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl">
                        <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold font-serif">{offers.filter(o => o.active).length}</h4>
                        <p className="text-xs text-muted-foreground font-semibold">Active Campaigns</p>
                    </div>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border/80 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl">
                        <Gift className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold font-serif">12.4K</h4>
                        <p className="text-xs text-muted-foreground font-semibold">Total Redemptions</p>
                    </div>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border/80 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold font-serif">150 Stars</h4>
                        <p className="text-xs text-muted-foreground font-semibold">Avg. Redeem Threshold</p>
                    </div>
                </div>
            </div>

            {/* Reward Offer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div 
                        key={offer.id} 
                        className={`
                            bg-card p-6 rounded-2xl border border-border/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all duration-300
                            ${!offer.active && "opacity-75"}
                        `}
                    >
                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    {offer.starsRequired} Stars
                                </div>
                                <span className="text-[10px] font-bold text-muted-foreground uppercase">{offer.id}</span>
                            </div>

                            <h3 className="font-serif font-bold text-lg text-[#2C1A14] dark:text-white leading-tight">
                                {offer.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {offer.description}
                            </p>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-border/30">
                            <span className="text-[11px] font-semibold text-muted-foreground">
                                Status: <strong className={offer.active ? "text-emerald-500" : "text-muted-foreground"}>{offer.active ? "Active" : "Disabled"}</strong>
                            </span>

                            <button
                                onClick={() => toggleOffer(offer.id)}
                                className={`text-muted-foreground hover:text-primary transition-all duration-200`}
                            >
                                {offer.active ? (
                                    <ToggleRight className="w-9 h-9 text-emerald-500" />
                                ) : (
                                    <ToggleLeft className="w-9 h-9 text-zinc-400" />
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
