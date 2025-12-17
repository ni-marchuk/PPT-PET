import {ReactNode} from "react";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Providers} from "@/app/providers";
import {MainHeader} from "@/widgets/mainHeader/mainHeader";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PPA_PET Project",
    description: "PPA_PET Project description",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-300`}
        >
        <Providers>
            <MainHeader />
            {children}
        </Providers>
        </body>
        </html>
    );
}
