"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

export function Footer() {
    const footerSections: FooterSection[] = [
        {
            title: "Company",
            links: [
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Blog", href: "#" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "Digital Strategy", href: "#" },
                { label: "UI/UX Design", href: "#" },
                { label: "Development", href: "#" },
                { label: "Marketing", href: "#" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
            ],
        },
    ];

    return (
        <footer className="bg-white dark:bg-neutral-950" id="contact">
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold">
                                Let's work together
                                <span className="text-[#FF4D4D]">.</span>
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Ready to start your next project? Get in touch
                                and let's create something amazing.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
                                <Mail className="w-5 h-5" />
                                <span>hello@company.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
                                <Phone className="w-5 h-5" />
                                <span>+1 (555) 000-0000</span>
                            </div>
                            <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
                                <MapPin className="w-5 h-5" />
                                <span>123 Design Street, Creative City</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 
                                bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 
                                bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] transition-all"
                            />
                            <textarea
                                placeholder="Your message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 
                                bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FF4D4D] transition-all"
                            />
                        </div>
                        <Button className="w-full h-12 bg-[#FF4D4D] hover:bg-[#FF6666] text-white group">
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="border-t border-neutral-200 dark:border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-[7rem] font-bold">
                                Studio<span className="text-[#FF4D4D]">.</span>
                            </h3>
                        </div>

                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h4 className="font-semibold mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-neutral-600 dark:text-neutral-400 hover:text-[#FF4D4D] 
                                                transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-200 dark:border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <p className="text-center text-neutral-600 dark:text-neutral-400">
                        © {new Date().getFullYear()} Studio. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
