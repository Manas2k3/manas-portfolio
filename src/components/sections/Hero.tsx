"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const ROTATING_PHRASES = [
    "production-ready health-tech",
    "scalable Flutter apps",
    "AI-powered solutions",
] as const;

const INTERVAL_MS = 2800;

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isVisibleRef = useRef(true);

    // Detect mobile for smaller translateY
    useEffect(() => {
        const mql = window.matchMedia("(max-width: 768px)");
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile(e.matches);
        handleChange(mql);
        mql.addEventListener("change", handleChange as (e: MediaQueryListEvent) => void);
        return () =>
            mql.removeEventListener("change", handleChange as (e: MediaQueryListEvent) => void);
    }, []);

    // Start / stop phrase cycling, pausing on tab hidden
    const startInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (isVisibleRef.current) {
                setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
            }
        }, INTERVAL_MS);
    }, []);

    useEffect(() => {
        startInterval();

        const handleVisibility = () => {
            isVisibleRef.current = document.visibilityState === "visible";
            if (isVisibleRef.current) startInterval();
        };

        document.addEventListener("visibilitychange", handleVisibility);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [startInterval]);

    const slideY = isMobile ? 12 : 20;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
                delayChildren: shouldReduceMotion ? 0 : 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
        },
    };

    // Rotating phrase animation variants
    const phraseVariants = shouldReduceMotion
        ? {
            initial: {},
            animate: {},
            exit: {},
        }
        : {
            initial: {
                opacity: 0,
                y: slideY,
                filter: "blur(4px)",
            },
            animate: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1] as const,
                },
            },
            exit: {
                opacity: 0,
                y: -slideY,
                filter: "blur(4px)",
                transition: {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1] as const,
                },
            },
        };

    return (
        <section
            id="hero"
            aria-label="Hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#2F4156",
                overflow: "hidden",
            }}
        >
            {/* Subtle radial gradient overlay */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(86,124,141,0.12) 0%, transparent 70%), " +
                        "radial-gradient(ellipse 50% 80% at 80% 60%, rgba(36,51,68,0.5) 0%, transparent 60%)",
                    pointerEvents: "none",
                }}
            />

            {/* Subtle noise texture */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    maxWidth: 800,
                    padding: "0 24px",
                }}
            >
                {/* Badge */}
                <motion.div variants={itemVariants}>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 16px",
                            borderRadius: 100,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "rgba(200,217,230,0.9)",
                            border: "1px solid rgba(200,217,230,0.15)",
                            background: "rgba(86,124,141,0.12)",
                        }}
                    >
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "#567C8D",
                            }}
                        />
                        Currently Building AI Health Products
                    </span>
                </motion.div>

                {/* Name & Greeting */}
                <motion.p
                    variants={itemVariants}
                    style={{
                        marginTop: 32,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        color: "rgba(200,217,230,0.9)",
                    }}
                >
                    Hi, I&apos;m Manas Ranjan Sethi.
                </motion.p>

                {/* Headline with rotating text */}
                <motion.h1
                    variants={itemVariants}
                    style={{
                        marginTop: 16,
                        fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "#FFFFFF",
                        fontFamily: "var(--font-heading)",
                    }}
                >
                    I build{" "}
                    <span
                        style={{
                            display: "inline-block",
                            position: "relative",
                            verticalAlign: "bottom",
                            overflow: "hidden",
                            /* Fixed height to prevent layout shift — matches line-height */
                            height: "1.1em",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={phraseIndex}
                                variants={phraseVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                style={{
                                    display: "inline-block",
                                    color: "#567C8D",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {ROTATING_PHRASES[phraseIndex]}
                            </motion.span>
                        </AnimatePresence>
                        {/* Accent underline */}
                        <motion.span
                            key={`underline-${phraseIndex}`}
                            aria-hidden="true"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{
                                scaleX: 1,
                                opacity: 0.7,
                                transition: {
                                    duration: shouldReduceMotion ? 0 : 0.5,
                                    delay: shouldReduceMotion ? 0 : 0.35,
                                    ease: [0.4, 0, 0.2, 1] as const,
                                },
                            }}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: 2,
                                background: "#567C8D",
                                borderRadius: 1,
                                transformOrigin: "left center",
                            }}
                        />
                    </span>
                    <br />
                    that ship & scale.
                </motion.h1>

                {/* Accent underline bar */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        margin: "16px auto 0",
                        height: 3,
                        width: shouldReduceMotion ? 48 : 0,
                        background: "#567C8D",
                        borderRadius: 2,
                    }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
                    viewport={{ once: true }}
                />

                {/* Subtext */}
                <motion.p
                    variants={itemVariants}
                    style={{
                        marginTop: 24,
                        fontSize: "1.05rem",
                        lineHeight: 1.6,
                        color: "rgba(200,217,230,0.85)",
                        maxWidth: 540,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Founding engineer specializing in cross-platform mobile apps, cloud infrastructure, and deploying machine learning models on-device.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        marginTop: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="#projects"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "14px 32px",
                            background: "#567C8D",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: 12,
                            textDecoration: "none",
                            boxShadow: "0 4px 16px rgba(86,124,141,0.3)",
                            transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#4a6d7d";
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 6px 20px rgba(86,124,141,0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#567C8D";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 16px rgba(86,124,141,0.3)";
                        }}
                    >
                        View Projects <FiArrowDown size={16} />
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "12px 28px",
                            background: "transparent",
                            color: "rgba(200,217,230,0.6)",
                            fontWeight: 500,
                            fontSize: "0.925rem",
                            borderRadius: 12,
                            textDecoration: "none",
                            border: "1px solid rgba(86,124,141,0.3)",
                            transition: "background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(245,239,235,0.06)";
                            e.currentTarget.style.borderColor = "rgba(86,124,141,0.5)";
                            e.currentTarget.style.color = "rgba(200,217,230,0.9)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "rgba(86,124,141,0.3)";
                            e.currentTarget.style.color = "rgba(200,217,230,0.6)";
                        }}
                    >
                        <FiDownload size={16} /> Download Resume
                    </a>
                </motion.div>

                {/* Socials */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        marginTop: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                    }}
                >
                    {[
                        { icon: <FiGithub size={18} />, href: "https://github.com/Manas2k3", label: "GitHub" },
                        { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/manas-ranjan-sethi-flutter-dev/", label: "LinkedIn" },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                color: "rgba(200,217,230,0.5)",
                                border: "1px solid rgba(200,217,230,0.1)",
                                textDecoration: "none",
                                transition: "color 0.3s ease, border-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#FFFFFF";
                                e.currentTarget.style.borderColor = "rgba(200,217,230,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(200,217,230,0.5)";
                                e.currentTarget.style.borderColor = "rgba(200,217,230,0.1)";
                            }}
                        >
                            {s.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        position: "absolute",
                        bottom: -80,
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <motion.div
                        animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        style={{ color: "rgba(200,217,230,0.3)" }}
                    >
                        <FiArrowDown size={18} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
