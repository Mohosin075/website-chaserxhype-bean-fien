"use client";
import React, { useState } from "react";
import { Plus, Edit2, Trash2, X, Star, Save, Image as ImageIcon } from "lucide-react";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    ordersCount: number;
    isPopular: boolean;
    active: boolean;
    image: string;
}

const initialMenuItems: MenuItem[] = [
    {
        id: "M-01",
        name: "Flat White",
        price: 4.50,
        description: "Double ristretto, steamed microfoam",
        rating: 4.5,
        ordersCount: 342,
        isPopular: true,
        active: true,
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "M-02",
        name: "Latte Art",
        price: 5.50,
        description: "Signature single origin, rosetta pour",
        rating: 4.9,
        ordersCount: 287,
        isPopular: true,
        active: true,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "M-03",
        name: "Cold Brew",
        price: 5.00,
        description: "18-hr steep, smooth & low-acid",
        rating: 4.7,
        ordersCount: 198,
        isPopular: false,
        active: true,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "M-04",
        name: "Iced Latte",
        price: 4.75,
        description: "Espresso over ice, choice of milk",
        rating: 4.6,
        ordersCount: 156,
        isPopular: false,
        active: false,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "M-05",
        name: "Espresso",
        price: 3.50,
        description: "Single or double shot, pure origin",
        rating: 4.9,
        ordersCount: 421,
        isPopular: false,
        active: true,
        image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "M-06",
        name: "Seasonal Special",
        price: 5.75,
        description: "Hand-crafted seasonal creation",
        rating: 4.8,
        ordersCount: 134,
        isPopular: true,
        active: true,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80"
    }
];

export default function MenuManagement() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
    const [modalOpen, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    
    // Form fields state
    const [currentItemId, setCurrentItemId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(4.00);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [isPopular, setIsPopular] = useState(false);
    const [active, setActive] = useState(true);

    const handleToggleActive = (id: string) => {
        setMenuItems(prev => prev.map(item => 
            item.id === id ? { ...item, active: !item.active } : item
        ));
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this menu item?")) {
            setMenuItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const handleOpenAdd = () => {
        setEditMode(false);
        setName("");
        setPrice(4.00);
        setDescription("");
        setImage("");
        setIsPopular(false);
        setActive(true);
        setModalOpen(true);
    };

    const handleOpenEdit = (item: MenuItem) => {
        setEditMode(true);
        setCurrentItemId(item.id);
        setName(item.name);
        setPrice(item.price);
        setDescription(item.description);
        setImage(item.image);
        setIsPopular(item.isPopular);
        setActive(item.active);
        setModalOpen(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const defaultImage = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80";
        const finalImage = image.trim() !== "" ? image.trim() : defaultImage;

        if (editMode) {
            setMenuItems(prev => prev.map(item => 
                item.id === currentItemId 
                    ? { ...item, name, price, description, image: finalImage, isPopular, active }
                    : item
            ));
        } else {
            const newItem: MenuItem = {
                id: `M-${Math.floor(Math.random() * 900 + 100)}`,
                name,
                price,
                description,
                rating: 5.0,
                ordersCount: 0,
                isPopular,
                active,
                image: finalImage
            };
            setMenuItems([...menuItems, newItem]);
        }
        
        setModalOpen(false);
    };

    return (
        <div className="flex-1 p-4 md:p-8 space-y-6 bg-[#FAF6F0] dark:bg-background min-h-screen text-foreground transition-colors duration-300">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
                <div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight text-[#2C1A14] dark:text-white">Menu Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">Bean Fien Admin Panel</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Manage menu items. Each item can have its own custom drink options.</p>
                </div>

                <button 
                    onClick={handleOpenAdd}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C1A14] dark:bg-primary text-white dark:text-[#1E0F0B] font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-[#2C1A14]/10"
                >
                    <Plus className="w-4.5 h-4.5" />
                    Add Item
                </button>
            </header>

            {/* Menu Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                    <div 
                        key={item.id} 
                        className={`
                            bg-white dark:bg-card rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden relative
                            ${!item.active && "opacity-75"}
                        `}
                    >
                        {/* Coffee Image Container */}
                        <div 
                            className="h-48 w-full bg-cover bg-center relative" 
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            {/* Badges on image */}
                            <div className="absolute inset-x-4 top-4 flex justify-between items-center">
                                {item.isPopular ? (
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E89360] text-[#1E0F0B] shadow-sm">
                                        Popular
                                    </span>
                                ) : (
                                    <div />
                                )}

                                <button
                                    onClick={() => handleToggleActive(item.id)}
                                    className={`
                                        text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm transition-all duration-350 cursor-pointer
                                        ${item.active 
                                            ? "bg-[#6BC68C] text-[#113B20]" 
                                            : "bg-[#E05E5E] text-white"
                                        }
                                    `}
                                >
                                    {item.active ? "● ON" : "● OFF"}
                                </button>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between items-start gap-3">
                                    <h3 className="font-serif font-bold text-lg text-[#2C1A14] dark:text-white leading-tight">
                                        {item.name}
                                    </h3>
                                    <span className="font-extrabold text-lg text-[#8B4513] dark:text-[#C07C4A]">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </div>

                            {/* Rating and Orders */}
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B4513] dark:text-[#C07C4A]">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <span>{item.rating.toFixed(1)}</span>
                                <span className="text-muted-foreground font-normal ml-1">{item.ordersCount} orders</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 pt-3 border-t border-border/30">
                                <button
                                    onClick={() => handleOpenEdit(item)}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F3ECE3]/60 dark:bg-white/5 dark:hover:bg-white/10 text-[#2C1A14] dark:text-white font-bold text-xs uppercase tracking-wider transition-colors border border-border/40"
                                >
                                    <Edit2 className="w-3.5 h-3.5" />
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20 transition-colors"
                                    title="Delete Item"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* ADD/EDIT ITEM MODAL */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-[#1E0F0B] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-border/80 relative animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="p-6 pb-4 border-b border-border/30 flex justify-between items-start">
                            <div>
                                <h2 className="font-serif text-xl font-bold text-[#2C1A14] dark:text-white">
                                    {editMode ? "Edit Menu Item" : "Add Menu Item"}
                                </h2>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {editMode ? `Item ID: ${currentItemId}` : "Create a new drink or food option"}
                                </p>
                            </div>
                            <button 
                                onClick={() => setModalOpen(false)}
                                className="p-1.5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full text-muted-foreground hover:text-foreground transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Item Name</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm font-semibold"
                                    placeholder="Flat White"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Price ($)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm font-semibold"
                                    placeholder="4.50"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Description</label>
                                <textarea
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={2}
                                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm font-semibold resize-none"
                                    placeholder="Double ristretto, steamed microfoam"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Image URL</label>
                                <div className="relative">
                                    <ImageIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        type="url"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-[#F3ECE3]/40 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm font-semibold"
                                        placeholder="https://images.unsplash.com/... (optional)"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 items-center py-2">
                                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={isPopular}
                                        onChange={(e) => setIsPopular(e.target.checked)}
                                        className="rounded border-border text-primary focus:ring-primary/30"
                                    />
                                    Popular Badge
                                </label>

                                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={active}
                                        onChange={(e) => setActive(e.target.checked)}
                                        className="rounded border-border text-primary focus:ring-primary/30"
                                    />
                                    Active Menu Item
                                </label>
                            </div>

                            {/* Footer Buttons */}
                            <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F3ECE3]/60 text-[#2C1A14] font-bold text-xs uppercase tracking-wider transition-colors border border-border/40"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C1A14] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#2C1A14]/15 cursor-pointer"
                                >
                                    <Save className="w-4 h-4" />
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
