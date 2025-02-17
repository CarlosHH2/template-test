"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const navItems = [
        { label: "Work", href: "#features" },
        { label: "Services", href: "#features" },
        { label: "Faq", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
                <nav
                    className="relative rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl 
        border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg shadow-neutral-950/5"
                >
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <a
                                href="#"
                                className="text-2xl font-semibold tracking-tight"
                            >
                                studio<span className="text-[#FF4D4D]">.</span>
                            </a>

                            <div className="hidden md:flex items-center gap-8">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-sm font-medium text-neutral-600 hover:text-neutral-950 
                        dark:text-neutral-400 dark:hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        setTheme(
                                            theme === "dark" ? "light" : "dark"
                                        )
                                    }
                                    className="ml-2"
                                >
                                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </Button>
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div
                        className={cn(
                            "md:hidden",
                            isMenuOpen ? "block" : "hidden"
                        )}
                    >
                        <div className="border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block text-sm font-medium text-neutral-600 hover:text-neutral-950 
                    dark:text-neutral-400 dark:hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                        setTheme(
                                            theme === "dark" ? "light" : "dark"
                                        )
                                    }
                                    className="w-full justify-start"
                                >
                                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="ml-2">Toggle theme</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
