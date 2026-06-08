"use client";
import React, { useState } from "react";
import { Search, Plus, Coffee, Tag, AlertCircle } from "lucide-react";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "Hot Drinks" | "Iced" | "Blended" | "Food";
    inStock: boolean;
}

const initialMenuItems: MenuItem[] = [
    { id: "M-01", name: "Espresso", description: "Rich, bold, and concentrated single shot of espresso", price: 3.00, category: "Hot Drinks", inStock: true },
    { id: "M-02", name: "Flat White", description: "Double espresso with velvety microfoam texture", price: 4.50, category: "Hot Drinks", inStock: true },
    { id: "M-03", name: "Caramel Macchiato", description: "Freshly steamed milk with vanilla-flavored syrup, espresso, and caramel drizzle", price: 5.50, category: "Hot Drinks", inStock: true },
    { id: "M-04", name: "Cold Brew", description: "Slow-steeped craft cold brew, smooth and naturally sweet", price: 4.00, category: "Iced", inStock: true },
    { id: "M-05", name: "Iced Latte", description: "Chilled espresso combined with cold milk and ice", price: 4.75, category: "Iced", inStock: true },
    { id: "M-06", name: "Mocha Frappe", description: "Blended coffee, milk, chocolate sauce, topped with whipped cream", price: 5.75, category: "Blended", inStock: true },
    { id: "M-07", name: "Butter Croissant", description: "Classic French flaky, buttery laminated pastry", price: 3.50, category: "Food", inStock: true },
    { id: "M-08", name: "Blueberry Muffin", description: "Moist muffin packed with fresh blueberries and streusel crumble", price: 3.75, category: "Food", inStock: false },
];

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState<"All" | "Hot Drinks" | "Iced" | "Blended" | "Food">("All");

    const filteredItems = menuItems.filter(item => {
        const matchesSearch = 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    const toggleStock = (id: string) => {
        setMenuItems(prev => prev.map(item => 
            item.id === id ? { ...item, inStock: !item.inStock } : item
        ));
    };

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-background min-h-screen text-foreground">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight">Menu Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">Configure your digital menu, prices, and stock levels</p>
                </div>

                <button 
                    onClick={() => alert("Add Menu Item flow...")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/95 active:scale-[0.98] transition-all shadow-md shadow-primary/10 text-sm w-fit"
                >
                    <Plus className="w-4 h-4" />
                    Add Item
                </button>
            </header>

            {/* Filter and Search controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search menu..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white dark:bg-[#1E0F0B] text-sm focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all"
                    />
                </div>

                {/* Categories Tabs */}
                <div className="flex bg-[#F3ECE3] dark:bg-[#2C1711] p-1 rounded-xl w-fit border border-border/40 flex-wrap">
                    {(["All", "Hot Drinks", "Iced", "Blended", "Food"] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategoryFilter(cat)}
                            className={`
                                px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
                                ${categoryFilter === cat 
                                    ? "bg-white dark:bg-primary dark:text-[#1E0F0B] text-primary shadow-sm" 
                                    : "text-muted-foreground hover:text-primary"
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                    <div 
                        key={item.id} 
                        className={`
                            bg-card rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden
                            ${!item.inStock && "opacity-75"}
                        `}
                    >
                        {/* Image / Header Placeholder */}
                        <div className="h-32 bg-[#F3ECE3] dark:bg-[#2C1711] flex items-center justify-center relative">
                            <Coffee className="w-12 h-12 text-[#8B4513] opacity-60" />
                            <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/85 dark:bg-[#1E0F0B]/85 text-primary">
                                {item.id}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-serif font-bold text-lg text-[#2C1A14] dark:text-white leading-tight">
                                        {item.name}
                                    </h3>
                                    <span className="font-extrabold text-[#8B4513] dark:text-[#C07C4A]">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                    {item.description}
                                </p>
                            </div>

                            {/* Tags / Toggle Stock */}
                            <div className="flex items-center justify-between pt-3 border-t border-border/30">
                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                                    <Tag className="w-3 h-3" /> {item.category}
                                </span>

                                <button
                                    onClick={() => toggleStock(item.id)}
                                    className={`
                                        text-[11px] font-bold px-3 py-1 rounded-lg border transition-all duration-200
                                        ${item.inStock 
                                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/25" 
                                            : "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/25"
                                        }
                                    `}
                                >
                                    {item.inStock ? "In Stock" : "Out of Stock"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
