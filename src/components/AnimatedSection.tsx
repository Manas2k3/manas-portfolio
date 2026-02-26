"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: AnimatedSectionProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: shouldReduceMotion ? 0.1 : 0.5,
                delay,
                ease: [0.4, 0, 0.2, 1] as const,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
