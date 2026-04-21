"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiPhone, FiFile, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" aria-labelledby="contact-heading" style={{ background: "var(--color-bg-beige)" }}>
            <div className="section-container">
                <AnimatedSection>
                    <p
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--color-teal)",
                            marginBottom: 8,
                        }}
                    >
                        Get in Touch
                    </p>
                    <h2
                        id="contact-heading"
                        style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "var(--color-text-heading)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Let&apos;s <span className="accent-text">build something</span> together.
                    </h2>
                    <span className="accent-bar" />
                    <p
                        style={{
                            marginTop: 16,
                            fontSize: "1rem",
                            color: "var(--color-text-muted)",
                            maxWidth: 520,
                            lineHeight: 1.7,
                        }}
                    >
                        Have a project in mind, a collaboration idea, or just want to say hello? I&apos;d
                        love to hear from you.
                    </p>
                </AnimatedSection>

                <div
                    style={{
                        marginTop: 48,
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 40,
                    }}
                    className="md:!grid-cols-[1.2fr_0.8fr]"
                >
                    {/* Form */}
                    <AnimatedSection delay={0.1}>
                        <form
                            onSubmit={handleSubmit}
                            style={{ display: "flex", flexDirection: "column", gap: 20 }}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    style={{
                                        display: "block",
                                        fontSize: "0.825rem",
                                        fontWeight: 600,
                                        color: "var(--color-text-heading)",
                                        marginBottom: 6,
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        fontSize: "0.9rem",
                                        borderRadius: 10,
                                        border: "1px solid var(--color-border-medium)",
                                        background: "var(--color-bg-white)",
                                        color: "var(--color-text-heading)",
                                        outline: "none",
                                        transition: "border-color 0.3s ease",
                                    }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-teal)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-border-medium)"; }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    style={{
                                        display: "block",
                                        fontSize: "0.825rem",
                                        fontWeight: 600,
                                        color: "var(--color-text-heading)",
                                        marginBottom: 6,
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        fontSize: "0.9rem",
                                        borderRadius: 10,
                                        border: "1px solid var(--color-border-medium)",
                                        background: "var(--color-bg-white)",
                                        color: "var(--color-text-heading)",
                                        outline: "none",
                                        transition: "border-color 0.3s ease",
                                    }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-teal)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-border-medium)"; }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    style={{
                                        display: "block",
                                        fontSize: "0.825rem",
                                        fontWeight: 600,
                                        color: "var(--color-text-heading)",
                                        marginBottom: 6,
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        fontSize: "0.9rem",
                                        borderRadius: 10,
                                        border: "1px solid var(--color-border-medium)",
                                        background: "var(--color-bg-white)",
                                        color: "var(--color-text-heading)",
                                        outline: "none",
                                        resize: "vertical",
                                        fontFamily: "inherit",
                                        transition: "border-color 0.3s ease",
                                    }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-teal)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-border-medium)"; }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                    padding: "12px 28px",
                                    background: status === "success" ? "#10b981" : status === "error" ? "#ef4444" : "var(--color-teal)",
                                    color: "#FFFFFF",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                    borderRadius: 10,
                                    border: "none",
                                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                                    width: "fit-content",
                                    boxShadow: "0 2px 8px rgba(86,124,141,0.2)",
                                    transition: "background 0.3s ease, transform 0.3s ease",
                                    opacity: status === "submitting" ? 0.7 : 1,
                                }}
                                onMouseEnter={(e) => {
                                    if (status !== "idle") return;
                                    e.currentTarget.style.background = "#4a6d7d";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    if (status !== "idle") return;
                                    e.currentTarget.style.background = "var(--color-teal)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <svg className="animate-spin" viewBox="0 0 24 24" style={{ width: 16, height: 16, color: "#fff" }}>
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <FiCheckCircle size={16} /> Sent Successfully!
                                    </>
                                ) : status === "error" ? (
                                    <>
                                        <FiAlertCircle size={16} /> Error Sending
                                    </>
                                ) : (
                                    <>
                                        <FiSend size={16} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </AnimatedSection>

                    {/* Sidebar */}
                    <AnimatedSection delay={0.2}>
                        <div
                            style={{
                                background: "var(--color-bg-white)",
                                border: "1px solid var(--color-border)",
                                borderRadius: 14,
                                padding: "28px 24px",
                                boxShadow: "var(--shadow-card)",
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "1.05rem",
                                    fontWeight: 700,
                                    color: "var(--color-text-heading)",
                                    marginBottom: 24,
                                }}
                            >
                                Connect with me
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[
                                    { icon: <FiGithub size={16} />, label: "GitHub", href: "https://github.com/Manas2k3" },
                                    { icon: <FiLinkedin size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/manas-ranjan-sethi-flutter-dev/" },
                                    { icon: <FiFile size={16} />, label: "Download Resume (PDF)", href: "/resume-latest.pdf" },
                                    { icon: <FiPhone size={16} />, label: "+91 8456958268", href: null },
                                ].map((item) => (
                                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                        <span style={{ color: "var(--color-teal)", flexShrink: 0 }}>{item.icon}</span>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    fontSize: "0.85rem",
                                                    color: "var(--color-text-body)",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                }}
                                                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-teal)"; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-body)"; }}
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <span style={{ fontSize: "0.85rem", color: "var(--color-text-body)" }}>
                                                {item.label}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </AnimatedSection>
                </div>

                {/* Footer */}
                <div
                    style={{
                        marginTop: 64,
                        paddingTop: 32,
                        borderTop: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 16,
                    }}
                >
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                        © {new Date().getFullYear()} Manas Ranjan Sethi. Built with Next.js.
                    </p>
                    <div style={{ display: "flex", gap: 12 }}>
                        {[
                            { icon: <FiGithub size={16} />, href: "https://github.com/manasrsethi", label: "GitHub" },
                            { icon: <FiLinkedin size={16} />, href: "https://linkedin.com/in/manasrsethi", label: "LinkedIn" },
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
                                    width: 34,
                                    height: 34,
                                    borderRadius: 8,
                                    color: "var(--color-text-muted)",
                                    border: "1px solid var(--color-border)",
                                    textDecoration: "none",
                                    transition: "color 0.3s ease, border-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--color-teal)";
                                    e.currentTarget.style.borderColor = "var(--color-border-teal)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--color-text-muted)";
                                    e.currentTarget.style.borderColor = "var(--color-border)";
                                }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
