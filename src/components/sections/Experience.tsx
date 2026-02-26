"use client";

import AnimatedSection from "@/components/AnimatedSection";

const experiences = [
    {
        period: "May 2025 — Present",
        role: "Founding / Lead Mobile Engineer (Full-Stack)",
        company: "BabyCue Private Limited",
        bullets: [
            "Founding and sole engineer owning end-to-end architecture, development, and production operations of GI Bud, a gut health mobile application with 300+ active users on the Play Store.",
            "Engineered the Python/Flask backend on Google Cloud Run, integrating AI-powered tongue analysis to automate health report generation and reduce manual diagnosis time by 80%.",
            "Designed complex Firebase architecture utilizing Cloud Functions for serverless logic and Storage for secure media management (images, videos, health reports).",
            "Implemented secure, privacy-first authentication, real-time health risk scoring algorithms, and gender-specific onboarding flows for personalized user experiences.",
        ],
        tech: ["Flutter", "Python", "Flask", "GCP", "Firebase"],
    },
    {
        period: "Feb 2025 — May 2025",
        role: "Software Engineer",
        company: "Sallet IT Soft Private Limited",
        bullets: [
            "Collaborated with the engineering team to develop and maintain scalable Flutter mobile applications following Clean Architecture principles, ensuring high code quality.",
            "Optimized application performance by refactoring legacy code modules, resulting in a 15% reduction in app load time and improved maintainability.",
        ],
        tech: ["Flutter", "Dart", "Clean Architecture"],
    },
    {
        period: "Oct 2024 — Jan 2025",
        role: "Mobile Application Developer Intern",
        company: "BabyCue Private Limited",
        bullets: [
            "Designed and built the initial MVP (Minimum Viable Product) for the GI Bud app, establishing the foundational project structure.",
            "Architected the Flutter frontend using GetX state management and MVC pattern.",
            "Configured the initial Firebase Firestore schema to enable real-time data synchronization for early test users.",
        ],
        tech: ["Flutter", "GetX", "Firebase", "MVC"],
    },
];

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-heading" style={{ background: "var(--color-bg-white)" }}>
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
                        Experience
                    </p>
                    <h2
                        id="experience-heading"
                        style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "var(--color-text-heading)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Where I&apos;ve <span className="accent-text">made an impact.</span>
                    </h2>
                    <span className="accent-bar" />
                </AnimatedSection>

                {/* Timeline */}
                <div
                    style={{
                        marginTop: 56,
                        position: "relative",
                    }}
                >
                    {/* Vertical line */}
                    <div
                        aria-hidden="true"
                        className="hidden md:block"
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: "rgba(86,124,141,0.15)",
                            transform: "translateX(-50%)",
                        }}
                    />

                    {/* Mobile line */}
                    <div
                        aria-hidden="true"
                        className="md:hidden"
                        style={{
                            position: "absolute",
                            left: 16,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: "rgba(86,124,141,0.15)",
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                        {experiences.map((exp, i) => (
                            <AnimatedSection key={i} delay={i * 0.12}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr",
                                        position: "relative",
                                    }}
                                    className={`md:!grid-cols-[1fr_1fr]`}
                                >
                                    {/* Dot */}
                                    <div
                                        aria-hidden="true"
                                        className="hidden md:block"
                                        style={{
                                            position: "absolute",
                                            left: "50%",
                                            top: 24,
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "var(--color-navy)",
                                            border: "2px solid var(--color-bg-white)",
                                            transform: "translateX(-50%)",
                                            zIndex: 2,
                                        }}
                                    />

                                    {/* Mobile dot */}
                                    <div
                                        aria-hidden="true"
                                        className="md:hidden"
                                        style={{
                                            position: "absolute",
                                            left: 16,
                                            top: 24,
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "var(--color-navy)",
                                            border: "2px solid var(--color-bg-white)",
                                            transform: "translateX(-50%)",
                                            zIndex: 2,
                                        }}
                                    />

                                    {/* Card — alternates sides on desktop */}
                                    <div
                                        className={i % 2 === 0 ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"}
                                        style={{
                                            paddingLeft: "40px",
                                        }}
                                    // Reset mobile padding on md
                                    >
                                        <div
                                            style={{
                                                background: "var(--color-bg-white)",
                                                border: "1px solid var(--color-border)",
                                                borderRadius: 14,
                                                padding: "24px 28px",
                                                boxShadow: "var(--shadow-card)",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    fontSize: "0.72rem",
                                                    fontWeight: 600,
                                                    color: "var(--color-teal)",
                                                    padding: "3px 12px",
                                                    borderRadius: 100,
                                                    background: "rgba(86,124,141,0.08)",
                                                    marginBottom: 12,
                                                }}
                                            >
                                                {exp.period}
                                            </span>
                                            <h3
                                                style={{
                                                    fontFamily: "var(--font-heading)",
                                                    fontSize: "1.1rem",
                                                    fontWeight: 700,
                                                    color: "var(--color-text-heading)",
                                                    letterSpacing: "-0.01em",
                                                    marginBottom: 2,
                                                }}
                                            >
                                                {exp.role}
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: "0.85rem",
                                                    fontWeight: 600,
                                                    color: "var(--color-teal)",
                                                    marginBottom: 16,
                                                }}
                                            >
                                                {exp.company}
                                            </p>
                                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                                                {exp.bullets.map((b, j) => (
                                                    <li
                                                        key={j}
                                                        style={{
                                                            fontSize: "0.85rem",
                                                            color: "var(--color-text-body)",
                                                            lineHeight: 1.7,
                                                            paddingLeft: 14,
                                                            position: "relative",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                position: "absolute",
                                                                left: 0,
                                                                top: 8,
                                                                width: 4,
                                                                height: 4,
                                                                borderRadius: "50%",
                                                                background: "var(--color-teal-muted)",
                                                            }}
                                                        />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                                                {exp.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            fontWeight: 500,
                                                            padding: "3px 10px",
                                                            borderRadius: 100,
                                                            background: "var(--color-bg-beige)",
                                                            color: "var(--color-text-muted)",
                                                            border: "1px solid var(--color-border)",
                                                        }}
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty cell for alternation */}
                                    {i % 2 === 0 ? (
                                        <div className="hidden md:block" />
                                    ) : (
                                        <div className="hidden md:block md:col-start-1 md:row-start-1" />
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
