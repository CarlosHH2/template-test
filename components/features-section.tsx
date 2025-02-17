"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FeatureCard {
    title: string;
    description: string;
    avatar: string;
    name: string;
    role: string;
}

interface ExpertiseCard {
    title: string;
    description: string;
    image: string;
    stats?: { label: string; value: string }[];
    colSpan: number;
}

interface FAQItem {
    question: string;
    answer: string;
    isOpen?: boolean;
}

export function FeaturesSection() {
    const features: FeatureCard[] = [
        {
            title: "Digital Strategy",
            description:
                "We develop comprehensive digital strategies that align with your business objectives and drive growth.",
            avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
            name: "Sarah Johnson",
            role: "Digital Strategist",
        },
        {
            title: "UI/UX Design",
            description:
                "Creating intuitive and engaging user experiences that delight your customers and boost conversion.",
            avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png",
            name: "Michael Chen",
            role: "Lead Designer",
        },
        {
            title: "Development",
            description:
                "Building scalable, high-performance applications using cutting-edge technologies.",
            avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
            name: "Emily Davis",
            role: "Senior Developer",
        },
        {
            title: "SEO",
            description:
                "Optimizing your website for search engines to improve visibility and drive more traffic.",
            avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-03-JateJIUhtd3PXynaMG9TDWQ55j5AVP.png",
            name: "David Rodriguez",
            role: "SEO Specialist",
        },
        {
            title: "Marketing",
            description:
                "Developing effective marketing strategies to reach your target audience and increase engagement.",
            avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-03-JateJIUhtd3PXynaMG9TDWQ55j5AVP.png",
            name: "Jessica Thompson",
            role: "Marketing Manager",
        },
    ];

    const expertise: ExpertiseCard[] = [
        {
            title: "Figma Design",
            description:
                "We create stunning designs for your website and mobile applications using Figma.",
            image: "/Design Components.svg",
            stats: [
                { label: "Projects", value: "150+" },
                { label: "Downloads", value: "10k+" },
            ],
            colSpan: 2,
        },
        {
            title: "Illustration",
            description:
                "We create stunning illustrations for your website and mobile applications.",
            image: "/Online Art Illustration.svg",
            stats: [{ label: "Illustrations", value: "50+" }],
            colSpan: 1,
        },
        {
            title: "Inspiration",
            description:
                "We provide inspiration for your website and mobile applications.",
            image: "/Inspiration Illustration.svg",
            // stats: [{ label: "Clients", value: "200+" }],
            colSpan: 1,
        },
        {
            title: "Mobile",
            description:
                "We create modern and responsive applications for your website and mobile applications.",
            image: "/Mobile Testing Illustration.svg",
            // stats: [{ label: "Deployments", value: "500+" }],
            colSpan: 1,
        },
        {
            title: "Mobile Development",
            description: "Cross-platform mobile solutions",
            image: "/Online Art Illustration.svg",
            stats: [{ label: "Apps", value: "100+" }],
            colSpan: 1,
        },
    ];

    const faqs = [
        {
            question: "00. What services do you offer?",
            answer: "We offer a comprehensive range of digital services including web design, development, digital strategy, UI/UX design, SEO optimization, and digital marketing solutions.",
        },
        {
            question: "01. How long does a typical project take?",
            answer: "Project timelines vary based on scope and complexity. A typical website project takes 6-8 weeks, while larger applications may take 3-6 months.",
        },
        {
            question: "02. Do you offer ongoing support?",
            answer: "Yes, we provide continuous support and maintenance services to ensure your digital solutions remain up-to-date and perform optimally.",
        },
        {
            question: "03. What is your design process?",
            answer: "Our design process includes discovery, wireframing, design concepts, revisions, and final implementation. We collaborate closely with clients throughout each phase.",
        },
        {
            question: "04. How do you handle project communication?",
            answer: "We maintain transparent communication through regular updates, scheduled check-ins, and dedicated project management tools to keep you informed every step of the way.",
        },
        {
            question: "05. What makes your agency different?",
            answer: "We combine strategic thinking with cutting-edge technology and personalized attention to deliver solutions that truly set our clients apart in their respective markets.",
        },
    ];

    const [faqItems, setFaqItems] = useState<FAQItem[]>(
        faqs.map((faq) => ({ ...faq, isOpen: false }))
    );

    const toggleFAQ = (index: number) => {
        setFaqItems((prev) =>
            prev.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false,
            }))
        );
    };

    return (
        <section
            className="relative py-24 bg-white dark:bg-neutral-950"
            id="features"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        More than 1k+ happy customers
                        <span className="text-[#FF4D4D]">.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        We combine strategic thinking with cutting-edge
                        technology to deliver solutions that set you apart from
                        the competition.
                    </p>
                </div>

                <div className="grid md:grid-cols-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className={cn(
                                "group p-4 rounded-2xl bg-white dark:bg-neutral-900",
                                "border border-neutral-200 dark:border-neutral-800",
                                "hover:border-[#FF4D4D] dark:hover:border-[#FF4D4D]",
                                "transition-all duration-300",
                                "shadow-sm hover:shadow-md flex flex-col justify-between hover:opacity-100",
                                index === 0 && "opacity-20 -rotate-12",
                                index === 1 && "opacity-60 rotate-6",
                                index === 2 && "opacity-100",
                                index === 3 && "opacity-60 -rotate-6",
                                index === 4 && "opacity-20 rotate-12"
                            )}
                        >
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={feature.avatar}
                                    alt={feature.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full ring-2 ring-neutral-100 dark:ring-neutral-800"
                                />
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                        {feature.name}
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {feature.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                                {feature.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-[#FF4D4D] font-medium">
                                    {feature.title}
                                </span>
                                <ArrowRight className="hidden group-hover:block w-4 h-4 text-neutral-400 group-hover:text-[#FF4D4D] transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="relative mt-32 max-w-7xl mx-auto flex flex-col items-center gap-4">
                    <h2 className="text-4xl text-center md:text-5xl font-bold mb-6 text-[#FF4D4D]">
                        Our Expertise
                        <span className="text-black dark:text-white">.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
                        We combine strategic thinking with cutting-edge
                        technology to deliver solutions that set you apart from
                        the competition.
                    </p>
                    <div className="grid md:grid-cols-4 gap-6 w-full">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "relative group overflow-hidden rounded-2xl p-6 bg-white dark:bg-neutral-900",
                                    "border border-neutral-200 dark:border-neutral-800",
                                    "hover:border-[#FF4D4D] dark:hover:border-[#FF4D4D]",
                                    "transition-all duration-300",
                                    `col-span-${item.colSpan}`,
                                    "flex flex-col justify-between gap-4"
                                )}
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                </div>

                                {item.stats && (
                                    <div className="flex flex-wrap gap-6 mt-4">
                                        {item.stats.map((stat) => (
                                            <div key={stat.label}>
                                                <div className="text-2xl font-bold text-[#FF4D4D]">
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm text-neutral-500">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={200}
                                    height={200}
                                    className="absolute bottom-0 right-0 w-32 h-32 object-contain opacity-60 group-hover:opacity-20 transition-opacity"
                                />
                            </motion.div>
                        ))}
                        <motion.div className="col-span-2 p-6 rounded-2xl flex items-center justify-center">
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white group-hover:text-[#FF4D4D] transition-colors">
                                    Contact us
                                </span>
                                <span className="text-6xl text-center md:text-7xl font-bold text-[#FF4D4D]">
                                    →
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div
                className="relative mt-24 md:mt-72  max-w-7xl mx-auto px-4"
                id="faq"
            >
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Frequently Asked Questions
                        <span className="text-[#FF4D4D]">.</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Everything you need to know about our services and
                        process.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
                    {faqItems.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => toggleFAQ(index)}
                            className={cn(
                                "group p-6 rounded-2xl bg-white dark:bg-neutral-900",
                                "border border-neutral-200 dark:border-neutral-800",
                                "hover:border-[#FF4D4D] dark:hover:border-[#FF4D4D]",
                                "transition-all duration-300 cursor-pointer"
                            )}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#FF4D4D] transition-colors">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: faq.isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-neutral-500 dark:text-neutral-400"
                                >
                                    ↓
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {faq.isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
