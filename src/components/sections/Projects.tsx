"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
    {
        title: "GI Bud",
        tag: "GI Health Mobile App",
        role: "Founding / Lead Mobile Engineer",
        desc: "Built full system: Flutter app, Flask backend on Google Cloud Run, AI-driven tongue analysis.",
        impact: [
            "300+ active Play Store users",
            "Reduced manual diagnosis time by ~80%",
            "End-to-end product from MVP → production",
        ],
        tech: ["Flutter", "GetX", "Firebase", "Flask", "GCP", "TFLite"],
        links: [
            { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.mosaif.gibud", icon: <FaGooglePlay size={14} /> },
        ],
        image: "/gibud-banner.jpeg",
        color: "#567C8D",
    },
    {
        title: "Ikshana",
        tag: "Satellite Terrain Analysis",
        role: "Winner, SIH 2023",
        desc: "Flask backend + deep learning for terrain classification and segmentation, integrated GDAL and OpenTopography APIs.",
        impact: [
            "Winner - Smart India Hackathon 2023",
            "Top 10 nationally out of 10,000+ teams",
            "Real-time terrain intelligence visualization",
        ],
        tech: ["Flask", "TensorFlow", "GDAL", "React"],
        links: [
            { label: "View Code", href: "https://github.com/Manas2k3/Ikshana", icon: <FiGithub size={14} /> },
        ],
        image: "/Ikshana-banner.jpeg",
        color: "#2F4156",
    },
    {
        title: "Leaf-AgriApp",
        tag: "Kishan Mitr — Smart Farming",
        role: "Mobile + ML Developer",
        desc: "On-device crop disease detection with GPT-3 chatbot for farming advisories and offline-first architecture for rural contexts.",
        impact: [
            "96% accuracy on plant disease detection",
            "Offline-first for rural deployment",
            "GPT-3 powered farming advisory chatbot",
        ],
        tech: ["Flutter", "PyTorch", "GPT-3", "Firebase", "TFLite"],
        links: [
            { label: "View Code", href: "https://github.com/Manas2k3/Leaf-AgriApp", icon: <FiGithub size={14} /> },
        ],
        image: "/leaf-agri-banner.jpeg",
        color: "#567C8D",
    },
];

export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-heading" style={{ background: "var(--color-bg-beige)" }}>
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
                        Featured Work
                    </p>
                    <h2
                        id="projects-heading"
                        style={{
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "var(--color-text-heading)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Projects that <span className="accent-text">made an impact.</span>
                    </h2>
                    <span className="accent-bar" />
                    <p
                        style={{
                            marginTop: 16,
                            fontSize: "1rem",
                            color: "var(--color-text-muted)",
                            maxWidth: 560,
                            lineHeight: 1.7,
                        }}
                    >
                        Here are a few of the products I&apos;ve built from zero to production, shipped to
                        real users, and scaled.
                    </p>
                </AnimatedSection>

                <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 32 }}>
                    {projects.map((project, i) => (
                        <AnimatedSection key={project.title} delay={i * 0.1}>
                            <article
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr",
                                    background: "var(--color-bg-white)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    boxShadow: "var(--shadow-card)",
                                    transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)",
                                    cursor: "default",
                                }}
                                className="md:!grid-cols-[1fr_1.3fr]"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "var(--shadow-card)";
                                }}
                            >
                                {/* Project image */}
                                <div
                                    style={{
                                        position: "relative",
                                        minHeight: 240,
                                        overflow: "hidden",
                                        background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}20 100%)`,
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} banner`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{
                                            objectFit: "cover",
                                            transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.03)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: "32px 28px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "1.35rem",
                                                fontWeight: 700,
                                                color: "var(--color-text-heading)",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {project.title}
                                        </h3>
                                        <span
                                            style={{
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                color: "var(--color-teal)",
                                                padding: "3px 10px",
                                                borderRadius: 100,
                                                background: "rgba(86,124,141,0.08)",
                                            }}
                                        >
                                            {project.tag}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "0.825rem",
                                            fontWeight: 600,
                                            color: "var(--color-teal)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        {project.role}
                                    </p>

                                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: 1.7, marginBottom: 16 }}>
                                        {project.desc}
                                    </p>

                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 6 }}>
                                        {project.impact.map((item) => (
                                            <li
                                                key={item}
                                                style={{
                                                    fontSize: "0.85rem",
                                                    color: "var(--color-text-body)",
                                                    paddingLeft: 16,
                                                    position: "relative",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 8,
                                                        width: 5,
                                                        height: 5,
                                                        borderRadius: "50%",
                                                        background: "var(--color-teal)",
                                                    }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech tags */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                style={{
                                                    fontSize: "0.725rem",
                                                    fontWeight: 500,
                                                    padding: "4px 12px",
                                                    borderRadius: 100,
                                                    background: "var(--color-sky)",
                                                    color: "var(--color-text-heading)",
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                        {project.links.map((link) => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    padding: "8px 16px",
                                                    fontSize: "0.8rem",
                                                    fontWeight: 600,
                                                    borderRadius: 8,
                                                    textDecoration: "none",
                                                    color: "var(--color-teal)",
                                                    border: "1px solid var(--color-border-teal)",
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
                                                {link.icon} {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
