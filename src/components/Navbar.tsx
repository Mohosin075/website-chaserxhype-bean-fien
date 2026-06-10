"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectIsAuthenticated } from "@/redux/features/auth/authSlice";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface NavbarProps {
    theme?: "dark" | "light";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const { cart, setIsCartOpen, showNotification } = useCart();

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [userName, setUserName] = useState("Admin");
    const [userRole, setUserRole] = useState("Super Admin");
    const [userPhoto, setUserPhoto] = useState("");

    // Load admin profile information on mount
    useEffect(() => {
        const savedName = localStorage.getItem("bf_admin_name");
        const savedRole = localStorage.getItem("bf_admin_role");
        const savedPhoto = localStorage.getItem("bf_admin_photo");
        if (savedName) setUserName(savedName);
        if (savedRole) setUserRole(savedRole);
        if (savedPhoto) setUserPhoto(savedPhoto);
    }, []);

    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const isDark = theme === "dark";

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/rewards", label: "Rewards" },
        { href: "/gift-cards", label: "Gift Cards" },
    ];

    const handleSignOut = () => {
        setIsProfileOpen(false);
        dispatch(logout());
        showNotification("Successfully logged out");
        router.push("/auth/login");
    };

    return (
        <header 
            className={`relative z-40 border-b backdrop-blur-md sticky top-0 transition-all duration-300 ${
                isDark 
                    ? "border-white/5 bg-transparent" 
                    : "border-[#2C1A14]/10 bg-[#FAF6F0]/85"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105 ${
                        isDark 
                            ? "bg-[#2C1711]/50 border border-white/20" 
                            : "bg-[#2C1711] border border-[#C07C4A]/40"
                    }`}>
                        <img 
                            src="/coffee_bean_mascot.png" 
                            alt="Bean Fien Logo" 
                            className="w-full h-full object-cover p-1" 
                        />
                    </div>
                    {!isDark && (
                        <div className="hidden sm:block text-left">
                            <span className="font-serif text-lg font-bold tracking-wider block leading-none text-[#2C1A14]">Bean Fien</span>
                            <span className="text-[9px] uppercase tracking-widest text-[#C07C4A] font-bold">Specialty Coffee</span>
                        </div>
                    )}
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition-all pb-1.5 border-b-2 ${
                                    isActive
                                        ? isDark 
                                            ? "text-[#E05A2B] border-[#E05A2B]" 
                                            : "text-[#C07C4A] border-[#C07C4A]"
                                        : isDark
                                            ? "text-[#D4C5B9] border-transparent hover:text-white hover:border-white/40"
                                            : "text-[#2C1A14] border-transparent hover:text-[#C07C4A] hover:border-[#C07C4A]/40"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right utility buttons */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Cart Button */}
                    <button 
                        onClick={() => setIsCartOpen(true)}
                        className={`p-2.5 rounded-full transition-colors relative group ${
                            isDark ? "hover:bg-white/5" : "hover:bg-[#2C1A14]/5"
                        }`}
                        aria-label="Open Cart"
                    >
                        <ShoppingCart className={`w-6 h-6 transition-colors ${
                            isDark 
                                ? "text-[#FAF6F0] group-hover:text-[#E05A2B]" 
                                : "text-[#2C1A14] group-hover:text-[#C07C4A]"
                        }`} />
                        {totalCartItems > 0 && (
                            <span className={`absolute -top-1 -right-1 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border animate-pulse ${
                                isDark 
                                    ? "bg-[#E05A2B] text-[#080403] border-[#080403]" 
                                    : "bg-[#C07C4A] text-[#140A07] border-[#FAF6F0]"
                            }`}>
                                {totalCartItems}
                            </span>
                        )}
                    </button>

                    {/* Auth Button / Profile Dropdown */}
                    {isAuthenticated ? (
                        <div className="relative">
                            <button 
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-left ${
                                    isDark
                                        ? "border-white/10 bg-white/5 hover:bg-white/10 text-white"
                                        : "border-[#2C1A14]/15 bg-[#2C1A14]/5 hover:bg-[#2C1A14]/10 text-[#2C1A14]"
                                }`}
                            >
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-[#C07C4A]/20 border border-[#C07C4A]/30 flex items-center justify-center relative">
                                    {userPhoto ? (
                                        <img src={userPhoto} alt="Admin" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className={`text-xs font-bold ${isDark ? "text-[#E05A2B]" : "text-[#C07C4A]"}`}>BF</span>
                                    )}
                                </div>
                                <span className="text-xs font-semibold hidden md:inline-block pr-1">{userName}</span>
                                <ChevronDown className={`w-3.5 h-3.5 hidden md:block ${isDark ? "text-[#E05A2B]" : "text-[#C07C4A]"}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isProfileOpen && (
                                <div className={`absolute right-0 mt-3 w-56 rounded-2xl border shadow-2xl p-2 z-50 ${
                                    isDark
                                        ? "bg-[#1E0F0B] border-white/10"
                                        : "bg-[#1E0F0B] border-[#C07C4A]/30"
                                }`}>
                                    <div className="px-4 py-3 border-b border-white/5 text-left">
                                        <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-[#E05A2B]" : "text-[#C07C4A]"}`}>{userRole}</p>
                                        <p className="text-sm font-semibold text-white truncate">{userName}</p>
                                    </div>
                                    <div className="py-1.5 space-y-1">
                                        <Link 
                                            href="/admin" 
                                            onClick={() => setIsProfileOpen(false)}
                                            className={`flex items-center w-full px-4 py-2.5 text-sm rounded-xl hover:bg-white/5 text-white transition-all font-semibold ${
                                                isDark ? "hover:text-[#E05A2B]" : "hover:text-[#C07C4A]"
                                            }`}
                                        >
                                            Dashboard
                                        </Link>
                                        <Link 
                                            href="/admin/settings" 
                                            onClick={() => setIsProfileOpen(false)}
                                            className={`flex items-center w-full px-4 py-2.5 text-sm rounded-xl hover:bg-white/5 text-white transition-all font-semibold ${
                                                isDark ? "hover:text-[#E05A2B]" : "hover:text-[#C07C4A]"
                                            }`}
                                        >
                                            Settings
                                        </Link>
                                    </div>
                                    <div className="pt-1.5 border-t border-white/5">
                                        <button 
                                            onClick={handleSignOut}
                                            className="flex items-center w-full px-4 py-2.5 text-sm rounded-xl hover:bg-red-500/10 text-red-400 font-semibold text-left transition-colors"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link 
                            href="/auth/login"
                            className={`text-sm font-semibold tracking-wide px-6 py-2.5 rounded-lg transition-colors text-center ${
                                isDark
                                    ? "bg-[#2C120C] hover:bg-[#3E1A12] border border-[#E05A2B]/20 text-[#FAF6F0]"
                                    : "bg-[#2C120C] hover:bg-[#4A241A] text-[#FAF6F0]"
                            }`}
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
