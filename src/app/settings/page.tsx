"use client";
import React, { useState } from "react";
import { Settings, Save, Coffee, Bell, Shield, Sliders } from "lucide-react";

export default function SettingsPage() {
    const [shopName, setShopName] = useState("Bean Fien");
    const [starsPerDollar, setStarsPerDollar] = useState(10);
    const [openingTime, setOpeningTime] = useState("07:00");
    const [closingTime, setClosingTime] = useState("21:00");
    const [autoLiveUpdates, setAutoLiveUpdates] = useState(true);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Settings saved successfully!");
    };

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-background min-h-screen text-foreground">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-sm text-muted-foreground mt-1">Configure shop settings, operating hours, and loyalty rules</p>
                </div>
            </header>

            <form onSubmit={handleSave} className="max-w-4xl space-y-6">
                {/* General Shop Settings */}
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                        <Sliders className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-lg font-bold">General Shop Settings</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase">Shop Brand Name</label>
                            <input
                                type="text"
                                value={shopName}
                                onChange={(e) => setShopName(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase">Loyalty Reward Rate (Stars per $1 spent)</label>
                            <input
                                type="number"
                                value={starsPerDollar}
                                onChange={(e) => setStarsPerDollar(Number(e.target.value))}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm font-medium"
                            />
                        </div>
                    </div>
                </div>

                {/* Operating Hours Settings */}
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                        <Coffee className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-lg font-bold">Operating Hours</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase">Opening Time</label>
                            <input
                                type="time"
                                value={openingTime}
                                onChange={(e) => setOpeningTime(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm font-medium"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase">Closing Time</label>
                            <input
                                type="time"
                                value={closingTime}
                                onChange={(e) => setClosingTime(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm font-medium"
                            />
                        </div>
                    </div>
                </div>

                {/* Notifications & System Settings */}
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-border/40">
                        <Bell className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-lg font-bold">System Preferences</h3>
                    </div>

                    <div className="flex items-center justify-between py-2">
                        <div className="space-y-0.5">
                            <h4 className="text-sm font-bold">Auto Live Updates</h4>
                            <p className="text-xs text-muted-foreground">Automatically simulate incoming orders in real-time on the dashboard</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setAutoLiveUpdates(!autoLiveUpdates)}
                            className={`
                                relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none
                                ${autoLiveUpdates ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700"}
                            `}
                        >
                            <span
                                className={`
                                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
                                    ${autoLiveUpdates ? "translate-x-5" : "translate-x-0"}
                                `}
                            />
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/95 active:scale-[0.98] transition-all shadow-md shadow-primary/10 text-sm cursor-pointer"
                    >
                        <Save className="w-4 h-4" />
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
}
