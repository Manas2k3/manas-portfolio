"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiUsers, FiAward, FiSmartphone } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
    { icon: <FiUsers size={22} />, value: 300, suffix: "+", label: "Play Store Active Users" },
    { icon: <FiAward size={22} />, value: 2023, suffix: "", label: "SIH Winner" },
    { icon: <FiSmartphone size={22} />, value: 2, suffix: "", label: "Production Apps Shipped" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const triggered = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !triggered.current) {
                    triggered.current = true;
                    const duration = 1200;
                    const start = performance.now();
                    const step = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function Stats() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            aria-label="Key stats"
            style={{
                background: "var(--color-bg-beige)",
                borderTop: "1px solid var(--color-border)",
                borderBottom: "1px solid var(--color-border)",
            }}
        >
            <div className="section-container" style={{ padding: "48px 24px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 32,
                        textAlign: "center",
                    }}
                >
                    {stats.map((stat, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                                <div
                                    style={{
                                        color: "var(--color-teal)",
                                        marginBottom: 4,
                                    }}
                                >
                                    {stat.icon}
                                </div>
                                <span
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "2.5rem",
                                        fontWeight: 700,
                                        color: "var(--color-text-heading)",
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                    }}
                                >
                                    {shouldReduceMotion ? (
                                        <>
                                            {stat.value}
                                            {stat.suffix}
                                        </>
                                    ) : (
                                        <CountUp target={stat.value} suffix={stat.suffix} />
                                    )}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.85rem",
                                        color: "var(--color-text-muted)",
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
