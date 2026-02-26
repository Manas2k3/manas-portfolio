"use client";

import { FiDownload } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";

const techStack = [
    "Flutter", "Dart", "GetX", "Firebase", "TFLite",
    "TensorFlow", "PyTorch", "Flask", "GCP", "Docker",
    "Python", "TypeScript",
];

export default function About() {
    return (
        <section id="about" aria-labelledby="about-heading" style={{ background: "var(--color-bg-white)" }}>
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
                        About Me
                    </p>
                    <h2
                        id="about-heading"
                        style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "var(--color-text-heading)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Engineer, builder, <span className="accent-text">problem solver.</span>
                    </h2>
                    <span className="accent-bar" style={{ marginBottom: 40 }} />
                </AnimatedSection>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 48,
                    }}
                    className="md:!grid-cols-[1.1fr_0.9fr]"
                >
                    {/* Bio */}
                    <AnimatedSection delay={0.1}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <p style={{ color: "var(--color-text-body)", lineHeight: 1.8, fontSize: "1rem" }}>
                                I build and ship end-to-end mobile products from Flutter UI and
                                on-device TFLite models to Flask backends on Google Cloud Run. I
                                lead and build full-stack mobile systems that prioritize performance, user
                                privacy, and production reliability.
                            </p>
                            <p style={{ color: "var(--color-text-body)", lineHeight: 1.8, fontSize: "1rem" }}>
                                Driven by a passion for bridging the gap between cutting-edge machine learning research and production-ready mobile applications, I specialize in developing solutions that have a tangible impact. From healthcare AI to Agri AI and beyond, I excel at the intersection of mobile engineering and intelligent systems.
                            </p>
                            <p style={{ color: "var(--color-text-body)", lineHeight: 1.8, fontSize: "1rem" }}>
                                I believe in shipping early, iterating fast, and building products that
                                users genuinely rely on every day.
                            </p>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "10px 24px",
                                    border: "1px solid var(--color-teal)",
                                    borderRadius: 10,
                                    color: "var(--color-teal)",
                                    fontWeight: 600,
                                    fontSize: "0.875rem",
                                    textDecoration: "none",
                                    width: "fit-content",
                                    transition: "background 0.3s ease, color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "var(--color-teal)";
                                    e.currentTarget.style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "var(--color-teal)";
                                }}
                            >
                                <FiDownload size={16} /> Download Resume
                            </a>
                        </div>
                    </AnimatedSection>

                    {/* Tech Stack */}
                    <AnimatedSection delay={0.2}>
                        <div>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "var(--color-text-heading)",
                                    marginBottom: 20,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Tech Stack
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 6,
                                            padding: "8px 16px",
                                            background: "var(--color-bg-beige)",
                                            color: "var(--color-text-heading)",
                                            fontSize: "0.825rem",
                                            fontWeight: 500,
                                            borderRadius: 100,
                                            border: "1px solid var(--color-border)",
                                            transition: "background 0.3s ease",
                                            cursor: "default",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "var(--color-sky)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "var(--color-bg-beige)";
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                background: "var(--color-teal)",
                                                flexShrink: 0,
                                            }}
                                        />
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
