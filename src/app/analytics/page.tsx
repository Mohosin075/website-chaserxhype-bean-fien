"use client";
import React, { useState } from "react";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";

const salesByHour = [
    { hour: "08:00", sales: 120 },
    { hour: "10:00", sales: 340 },
    { hour: "12:00", sales: 290 },
    { hour: "14:00", sales: 180 },
    { hour: "16:00", sales: 220 },
    { hour: "18:00", sales: 150 },
    { hour: "20:00", sales: 90 },
];

const bestSellingProducts = [
    { name: "Flat White", sales: 420, revenue: 1890.00 },
    { name: "Cold Brew", sales: 310, revenue: 1240.00 },
    { name: "Iced Latte", sales: 280, revenue: 1330.00 },
    { name: "Cappuccino", sales: 210, revenue: 945.00 },
    { name: "Croissant", sales: 180, revenue: 630.00 },
];

export default function AnalyticsPage() {
    const [timeframe, setTimeframe] = useState<"Today" | "Week" | "Month">("Week");

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-background min-h-screen text-foreground">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight">Analytics & Reports</h1>
                    <p className="text-sm text-muted-foreground mt-1">Deep-dive into coffee shop performance, peak hours, and product sales</p>
                </div>

                <div className="flex bg-[#F3ECE3] dark:bg-[#2C1711] p-1 rounded-xl w-fit border border-border/40">
                    {(["Today", "Week", "Month"] as const).map((time) => (
                        <button
                            key={time}
                            onClick={() => setTimeframe(time)}
                            className={`
                                px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
                                ${timeframe === time 
                                    ? "bg-white dark:bg-primary dark:text-[#1E0F0B] text-primary shadow-sm" 
                                    : "text-muted-foreground hover:text-primary"
                                }
                            `}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </header>

            {/* Performance Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Avg. Ticket Value</span>
                        <span className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">
                            <TrendingUp className="w-3 h-3" /> +4.2%
                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-serif text-3xl font-extrabold text-[#2C1A14] dark:text-white">$7.85</h2>
                        <p className="text-[10px] text-muted-foreground mt-1">Average spent per transaction</p>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Conversion Rate</span>
                        <span className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">
                            <TrendingUp className="w-3 h-3" /> +1.8%
                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-serif text-3xl font-extrabold text-[#2C1A14] dark:text-white">82.4%</h2>
                        <p className="text-[10px] text-muted-foreground mt-1">Cart-to-order success rate</p>
                    </div>
                </div>

                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Loyalty Adoption</span>
                        <span className="flex items-center gap-0.5 text-[11px] font-bold text-red-600 bg-red-50 dark:bg-red-950/30 px-2 py-0.5 rounded-full">
                            <TrendingDown className="w-3 h-3" /> -0.5%
                        </span>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-serif text-3xl font-extrabold text-[#2C1A14] dark:text-white">68.7%</h2>
                        <p className="text-[10px] text-muted-foreground mt-1">Percentage of order transactions using loyalty stars</p>
                    </div>
                </div>
            </div>

            {/* Peak Hours & Best Selling Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Peak Hours Area Chart */}
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="font-serif text-lg font-bold">Peak Business Hours</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Average customer foot traffic/sales over time</p>
                    </div>

                    <div className="h-64 w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesByHour} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8B4513" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#8B4513" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="hour" stroke="#8E7E73" fontSize={11} tickLine={false} axisLine={false} />
                                <YAxis stroke="#8E7E73" fontSize={11} tickLine={false} axisLine={false} />
                                <Tooltip formatter={(val) => [val, "Sales Volume"]} />
                                <Area type="monotone" dataKey="sales" stroke="#8B4513" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Best Selling Products List */}
                <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="font-serif text-lg font-bold">Best Selling Products</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Top-performing menu items by volume</p>
                    </div>

                    <div className="overflow-x-auto mt-4 flex-1">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border/60 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                    <th className="py-2.5">Menu Item</th>
                                    <th className="py-2.5 text-center">Sales Qty</th>
                                    <th className="py-2.5 text-right">Revenue</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30 text-sm">
                                {bestSellingProducts.map((prod) => (
                                    <tr key={prod.name}>
                                        <td className="py-3 font-semibold text-[#2C1A14] dark:text-white">{prod.name}</td>
                                        <td className="py-3 text-center">{prod.sales}</td>
                                        <td className="py-3 text-right font-bold text-[#8B4513] dark:text-[#C07C4A]">${prod.revenue.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
