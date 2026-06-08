"use client";
import React, { useState } from "react";
import { Search, Star, Award, ChevronUp, ChevronDown, Mail } from "lucide-react";

interface Customer {
    id: string;
    name: string;
    email: string;
    totalOrders: number;
    totalSpent: number;
    starsBalance: number;
    tier: "Gold" | "Silver" | "Bronze";
    joinedDate: string;
}

const initialCustomers: Customer[] = [
    { id: "C-101", name: "Sarah Chen", email: "sarah.chen@gmail.com", totalOrders: 54, totalSpent: 382.50, starsBalance: 120, tier: "Gold", joinedDate: "Jan 12, 2025" },
    { id: "C-102", name: "James Park", email: "james.park@naver.com", totalOrders: 32, totalSpent: 215.00, starsBalance: 45, tier: "Silver", joinedDate: "Feb 05, 2025" },
    { id: "C-103", name: "Mia Torres", email: "mia.torres@outlook.com", totalOrders: 89, totalSpent: 642.00, starsBalance: 310, tier: "Gold", joinedDate: "Oct 22, 2024" },
    { id: "C-104", name: "Liam Nguyen", email: "liam.nguyen@yahoo.com", totalOrders: 18, totalSpent: 110.50, starsBalance: 20, tier: "Bronze", joinedDate: "Mar 18, 2025" },
    { id: "C-105", name: "Ava Williams", email: "ava.williams@icloud.com", totalOrders: 27, totalSpent: 184.20, starsBalance: 35, tier: "Silver", joinedDate: "Feb 14, 2025" },
    { id: "C-106", name: "Marcus Brodie", email: "m.brodie@gmail.com", totalOrders: 41, totalSpent: 298.00, starsBalance: 90, tier: "Gold", joinedDate: "Nov 01, 2024" },
    { id: "C-107", name: "Lily Evans", email: "lily.evans@gmail.com", totalOrders: 12, totalSpent: 85.50, starsBalance: 15, tier: "Bronze", joinedDate: "May 02, 2025" },
];

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortField, setSortField] = useState<"name" | "totalSpent" | "starsBalance">("totalSpent");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    const handleSort = (field: "name" | "totalSpent" | "starsBalance") => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("desc");
        }
    };

    const sortedCustomers = [...customers]
        .filter(c => 
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            let aValue: any = a[sortField];
            let bValue: any = b[sortField];

            if (typeof aValue === "string") {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
            if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
            return 0;
        });

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-background min-h-screen text-foreground">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight">Customers</h1>
                    <p className="text-sm text-muted-foreground mt-1">Monitor loyalty tiers, purchase history, and stars balance</p>
                </div>
            </header>

            {/* Search and Filters */}
            <div className="flex items-center gap-4">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white dark:bg-[#1E0F0B] text-sm focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all"
                    />
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-card rounded-2xl border border-border/80 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/60 bg-muted/20 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                <th className="py-3.5 px-6">ID</th>
                                <th className="py-3.5 px-6 cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort("name")}>
                                    <span className="flex items-center gap-1">
                                        Name {sortField === "name" && (sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />)}
                                    </span>
                                </th>
                                <th className="py-3.5 px-6">Email</th>
                                <th className="py-3.5 px-6 text-center">Orders</th>
                                <th className="py-3.5 px-6 text-right cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort("totalSpent")}>
                                    <span className="flex items-center justify-end gap-1">
                                        Spent {sortField === "totalSpent" && (sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />)}
                                    </span>
                                </th>
                                <th className="py-3.5 px-6 text-center cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort("starsBalance")}>
                                    <span className="flex items-center justify-center gap-1">
                                        Stars {sortField === "starsBalance" && (sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />)}
                                    </span>
                                </th>
                                <th className="py-3.5 px-6 text-center">Loyalty Tier</th>
                                <th className="py-3.5 px-6">Joined Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/30 text-sm">
                            {sortedCustomers.map((c) => (
                                <tr key={c.id} className="hover:bg-[#F3ECE3]/10 dark:hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 text-muted-foreground font-semibold">{c.id}</td>
                                    <td className="py-4 px-6 font-semibold">{c.name}</td>
                                    <td className="py-4 px-6 text-muted-foreground text-xs">{c.email}</td>
                                    <td className="py-4 px-6 text-center">{c.totalOrders}</td>
                                    <td className="py-4 px-6 text-right font-extrabold text-[#8B4513] dark:text-[#C07C4A]">${c.totalSpent.toFixed(2)}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center justify-center gap-1 text-amber-500 font-bold">
                                            <Star className="w-3.5 h-3.5 fill-current" />
                                            {c.starsBalance}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex justify-center">
                                            <span className={`
                                                inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                                                ${c.tier === "Gold" && "bg-amber-500/10 text-amber-600 dark:text-amber-400"}
                                                ${c.tier === "Silver" && "bg-slate-400/10 text-slate-600 dark:text-slate-400"}
                                                ${c.tier === "Bronze" && "bg-orange-700/10 text-orange-700 dark:text-orange-400"}
                                            `}>
                                                <Award className="w-3.5 h-3.5" />
                                                {c.tier}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-xs text-muted-foreground">{c.joinedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
