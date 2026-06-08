"use client";
import React, { useState } from "react";
import { Search, ShoppingBag, Plus, Filter, Eye } from "lucide-react";

interface Order {
    id: string;
    customer: string;
    items: string;
    qty: number;
    total: number;
    status: "Completed" | "Preparing" | "Cancelled";
    date: string;
}

const initialOrders: Order[] = [
    { id: "#BF-2891", customer: "Sarah Chen", items: "Flat White, Butter Croissant", qty: 2, total: 12.50, status: "Completed", date: "Today, 09:24 AM" },
    { id: "#BF-2890", customer: "James Park", items: "Cold Brew, Double Espresso", qty: 2, total: 8.50, status: "Preparing", date: "Today, 09:15 AM" },
    { id: "#BF-2889", customer: "Mia Torres", items: "Latte Art Special", qty: 1, total: 5.50, status: "Completed", date: "Today, 08:48 AM" },
    { id: "#BF-2888", customer: "Liam Nguyen", items: "Seasonal Drip, Blueberry Muffin", qty: 2, total: 11.50, status: "Preparing", date: "Today, 08:32 AM" },
    { id: "#BF-2887", customer: "Ava Williams", items: "Iced Caramel Latte", qty: 1, total: 4.75, status: "Cancelled", date: "Yesterday, 04:15 PM" },
    { id: "#BF-2886", customer: "Marcus Brodie", items: "Hot Mocha, Pain au Chocolat", qty: 2, total: 10.00, status: "Completed", date: "Yesterday, 03:30 PM" },
    { id: "#BF-2885", customer: "Lily Evans", items: "Matcha Latte, Avocado Toast", qty: 2, total: 15.75, status: "Completed", date: "Yesterday, 02:10 PM" },
];

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>(initialOrders);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<"All" | "Completed" | "Preparing" | "Cancelled">("All");

    const filteredOrders = orders.filter(order => {
        const matchesSearch = 
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.items.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === "All" || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleAddOrder = () => {
        const newOrder: Order = {
            id: `#BF-${2892 + Math.floor(Math.random() * 1000)}`,
            customer: "New Customer",
            items: "Custom Drip Coffee",
            qty: 1,
            total: 4.50,
            status: "Preparing",
            date: "Just now"
        };
        setOrders([newOrder, ...orders]);
    };

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-background min-h-screen text-foreground">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight">Orders</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage and track your active and past coffee orders</p>
                </div>

                <button 
                    onClick={handleAddOrder}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/95 active:scale-[0.98] transition-all shadow-md shadow-primary/10 text-sm w-fit"
                >
                    <Plus className="w-4 h-4" />
                    New Order
                </button>
            </header>

            {/* Filter and Search controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white dark:bg-[#1E0F0B] text-sm focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all"
                    />
                </div>

                {/* Status Tabs */}
                <div className="flex bg-[#F3ECE3] dark:bg-[#2C1711] p-1 rounded-xl w-fit border border-border/40">
                    {(["All", "Completed", "Preparing", "Cancelled"] as const).map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`
                                px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
                                ${statusFilter === status 
                                    ? "bg-white dark:bg-primary dark:text-[#1E0F0B] text-primary shadow-sm" 
                                    : "text-muted-foreground hover:text-primary"
                                }
                            `}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-card rounded-2xl border border-border/80 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/60 bg-muted/20 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                <th className="py-3.5 px-6">Order ID</th>
                                <th className="py-3.5 px-6">Customer</th>
                                <th className="py-3.5 px-6">Items</th>
                                <th className="py-3.5 px-6 text-center">Qty</th>
                                <th className="py-3.5 px-6 text-right">Total</th>
                                <th className="py-3.5 px-6 text-center">Status</th>
                                <th className="py-3.5 px-6">Date</th>
                                <th className="py-3.5 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/30 text-sm">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-[#F3ECE3]/10 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 font-bold text-[#8B4513] dark:text-[#C07C4A]">{order.id}</td>
                                        <td className="py-4 px-6 font-semibold">{order.customer}</td>
                                        <td className="py-4 px-6 text-muted-foreground text-xs font-medium">{order.items}</td>
                                        <td className="py-4 px-6 text-center">{order.qty}</td>
                                        <td className="py-4 px-6 text-right font-bold">${order.total.toFixed(2)}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex justify-center">
                                                <span className={`
                                                    inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                                                    ${order.status === "Completed" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"}
                                                    ${order.status === "Preparing" && "bg-amber-500/10 text-amber-600 dark:text-amber-400"}
                                                    ${order.status === "Cancelled" && "bg-red-500/10 text-red-600 dark:text-red-400"}
                                                `}>
                                                    <span className={`w-1.5 h-1.5 rounded-full 
                                                        ${order.status === "Completed" && "bg-emerald-500"}
                                                        ${order.status === "Preparing" && "bg-amber-500"}
                                                        ${order.status === "Cancelled" && "bg-red-500"}
                                                    `} />
                                                    {order.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-xs text-muted-foreground">{order.date}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex justify-center">
                                                <button className="p-1.5 hover:bg-[#F3ECE3]/50 dark:hover:bg-white/10 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="py-12 text-center text-muted-foreground text-sm">
                                        No matching orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
