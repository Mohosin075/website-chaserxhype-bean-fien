"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import AuthenticatedGuard from "@/providers/AuthenticatedGuard";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthenticatedGuard>
            <div className="flex flex-col lg:flex-row min-h-screen w-full">
                <Sidebar />
                <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
                    {children}
                </main>
            </div>
        </AuthenticatedGuard>
    );
}
