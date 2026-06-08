import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import Sidebar from "@/components/Sidebar";

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-serif",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Bean Fien Admin",
        default: "Bean Fien Admin Panel",
    },
    description: "Bean Fien Coffee Shop Admin & Dashboard Panel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${lora.variable} font-sans antialiased bg-background text-foreground`}>
                <ReduxProvider>
                    <div className="flex flex-col lg:flex-row min-h-screen">
                        <Sidebar />
                        <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
                            {children}
                        </main>
                    </div>
                </ReduxProvider>
            </body>
        </html>
    );
}
