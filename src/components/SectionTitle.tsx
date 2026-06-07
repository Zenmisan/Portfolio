import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
    text: string;
}

export function SectionTitle({ text }: SectionTitleProps) {
    const letters = text.split("");

    return (
        <div className="mb-16">
            <motion.div
                className="flex flex-wrap items-center justify-center gap-x-1 sm:gap-x-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={`${letter}-${index}`}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-off-white tracking-tight"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 40,
                                },
                            },
                        }}
                    >
                        {letter === " " ? <span>&nbsp;</span> : letter}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}
