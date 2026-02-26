"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiX } from "react-icons/fi";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all"
            style={{
                background: scrolled ? "rgba(47, 65, 86, 0.97)" : "transparent",
                backdropFilter: scrolled ? "blur(8px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(245, 239, 235, 0.12)"
                    : "1px solid transparent",
                transition: "background 0.4s cubic-bezier(0.4,0,0.2,1), border-bottom 0.4s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
        >
            <nav
                className="flex items-center justify-between"
                style={{
                    maxWidth: 1120,
                    margin: "0 auto",
                    padding: "16px 24px",
                }}
                aria-label="Main navigation"
            >
                {/* Logo */}
                <a
                    href="#"
                    aria-label="Home"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: scrolled ? "#FFFFFF" : "#FFFFFF",
                        letterSpacing: "-0.03em",
                        textDecoration: "none",
                    }}
                >
                    Manas Sethi
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center" style={{ gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    color: scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.7)",
                                    textDecoration: "none",
                                    letterSpacing: "0.01em",
                                    position: "relative",
                                    paddingBottom: 4,
                                    transition: "color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.7)";
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                background: "var(--color-teal)",
                                padding: "8px 20px",
                                borderRadius: 10,
                                textDecoration: "none",
                                transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                                boxShadow: "0 2px 8px rgba(86,124,141,0.2)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#4a6d7d";
                                e.currentTarget.style.transform = "translateY(-1px)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(86,124,141,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "var(--color-teal)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 2px 8px rgba(86,124,141,0.2)";
                            }}
                        >
                            Get in Touch
                        </a>
                    </li>
                </ul>

                {/* Mobile menu button */}
                <button
                    className="flex md:hidden flex-col gap-[5px] w-8"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 8,
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            height: 2,
                            width: "100%",
                            background: "#FFFFFF",
                            borderRadius: 2,
                            transition: "transform 0.3s ease, opacity 0.3s ease",
                            transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
                        }}
                    />
                    <span
                        style={{
                            display: "block",
                            height: 2,
                            width: "100%",
                            background: "#FFFFFF",
                            borderRadius: 2,
                            transition: "opacity 0.3s ease",
                            opacity: mobileOpen ? 0 : 1,
                        }}
                    />
                    <span
                        style={{
                            display: "block",
                            height: 2,
                            width: "100%",
                            background: "#FFFFFF",
                            borderRadius: 2,
                            transition: "transform 0.3s ease",
                            transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                        }}
                    />
                </button>
            </nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            top: 0,
                            background: "rgba(47, 65, 86, 0.98)",
                            zIndex: 40,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 32,
                        }}
                    >
                        {/* Close button for mobile menu overlay */}
                        <button
                            onClick={() => setMobileOpen(false)}
                            aria-label="Close menu"
                            style={{
                                position: "absolute",
                                top: 24,
                                right: 24,
                                background: "none",
                                border: "none",
                                color: "#FFFFFF",
                                cursor: "pointer",
                                padding: 8,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 50,
                            }}
                        >
                            <FiX size={28} />
                        </button>

                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    color: "#FFFFFF",
                                    textDecoration: "none",
                                    fontFamily: "var(--font-heading)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                background: "var(--color-teal)",
                                padding: "12px 32px",
                                borderRadius: 12,
                                textDecoration: "none",
                                marginTop: 16,
                            }}
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
