"use client";

import { FiAward, FiUsers } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";

const achievements = [
    {
        icon: <FiAward size={24} />,
        year: "2023",
        title: "Smart India Hackathon 2023 — Winner",
        desc: "Led the winning team (top 10 out of 10,000+ teams) with Ikshana, a satellite terrain analysis platform using deep learning.",
    },
    {
        icon: <FiUsers size={24} />,
        year: "2024",
        title: "Startup Mahakumbh 2024",
        desc: "Presented Ikshana at a national startup showcase featuring 2000+ startups and 165+ investors in New Delhi.",
    },
];

export default function Achievements() {
    return (
        <section aria-labelledby="achievements-heading" style={{ background: "var(--color-bg-sky)" }}>
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
                        Recognition
                    </p>
                    <h2
                        id="achievements-heading"
                        style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "var(--color-text-heading)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Awards & <span className="accent-text">achievements.</span>
                    </h2>
                    <span className="accent-bar" />
                </AnimatedSection>

                <div
                    style={{
                        marginTop: 48,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 24,
                    }}
                >
                    {achievements.map((a, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <article
                                style={{
                                    background: "var(--color-bg-white)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: 14,
                                    padding: "28px 24px",
                                    boxShadow: "var(--shadow-card)",
                                    transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)",
                                    height: "100%",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "var(--shadow-card)";
                                }}
                            >
                                <div style={{ color: "var(--color-teal)", marginBottom: 16 }}>{a.icon}</div>
                                <span
                                    style={{
                                        display: "inline-block",
                                        fontSize: "0.7rem",
                                        fontWeight: 600,
                                        color: "var(--color-teal)",
                                        padding: "3px 10px",
                                        borderRadius: 100,
                                        background: "rgba(86,124,141,0.08)",
                                        marginBottom: 12,
                                    }}
                                >
                                    {a.year}
                                </span>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "1.05rem",
                                        fontWeight: 700,
                                        color: "var(--color-text-heading)",
                                        letterSpacing: "-0.01em",
                                        marginBottom: 8,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {a.title}
                                </h3>
                                <p style={{ fontSize: "0.875rem", color: "var(--color-text-body)", lineHeight: 1.7 }}>
                                    {a.desc}
                                </p>
                            </article>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
