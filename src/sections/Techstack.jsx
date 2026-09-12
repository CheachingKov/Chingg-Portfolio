import { useState } from "react";
import { CodeXml } from "lucide-react";

import {
    SiFigma,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiGit,
    SiGithub,
    SiUbuntu,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const techCategories = [
    {
        id: "frontend",
        title: "FRONT-END",
        skills: [
            { name: "UX/UI Design (Figma)", icon: SiFigma },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React.js", icon: SiReact },
        ],
    },
    {
        id: "backend",
        title: "BACK-END",
        skills: [
            { name: "Java", icon: FaJava },
            { name: "Python", icon: SiPython },
            { name: "node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
        ],
    },
    {
        id: "database",
        title: "DATABASE",
        skills: [
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        id: "tools",
        title: "DEPLOYMENT & TOOLS",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Ubuntu", icon: SiUbuntu },
        ],
    },
];

export const Techstack = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredCategories =
        activeTab === "all"
            ? techCategories
            : techCategories.filter((cat) => cat.id === activeTab);

    return (
        <section
            id="techstack"
            className="relative py-16 lg:py-20 overflow-hidden bg-(--color-background)"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-(--color-accent)/8 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 w-full">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-14 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-semibold tracking-wider uppercase text-(--color-primary)">
                        <CodeXml className="w-3.5 h-3.5 text-(--color-accent)" />
                        <span>Tech Stack</span>
                    </div>

                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--color-foreground)">
                        Skills &amp;{" "}
                        <span className="text-(--color-primary) font-serif italic font-normal glow-text">
                            Technologies
                        </span>
                    </h2> */}

                    {/* <p className="text-sm sm:text-base text-(--color-muted-foreground) leading-relaxed">
                        A categorized overview of the tools, frameworks, and technologies I
                        leverage to build robust, modern, and production-ready applications.
                    </p> */}

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                activeTab === "all"
                                    ? "bg-(--color-primary) text-white shadow-md shadow-(--color-primary)/20"
                                    : "bg-white/60 text-(--color-muted-foreground) hover:text-(--color-foreground) border border-(--color-border)/60"
                            }`}
                        >
                            All ({techCategories.reduce((acc, c) => acc + c.skills.length, 0)})
                        </button>
                        {techCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    activeTab === cat.id
                                        ? "bg-(--color-primary) text-white shadow-md shadow-(--color-primary)/20"
                                        : "bg-white/60 text-(--color-muted-foreground) hover:text-(--color-foreground) border border-(--color-border)/60"
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4 Quadrants / Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
                    {filteredCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 sm:p-8 border border-(--color-primary)/10 hover:border-(--color-primary)/25 shadow-[0_4px_24px_rgba(18,70,63,0.04)] hover:shadow-[0_16px_40px_rgba(18,70,63,0.1)] transition-all duration-300"
                        >
                            {/* Subtle decorative top border glow */}
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-(--color-primary)/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Header */}
                            <div className="flex items-center justify-between gap-4 mb-4">
                                <h3 className="text-base sm:text-lg font-bold tracking-tight text-(--color-foreground)">
                                    {category.title}
                                </h3>
                                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-(--color-secondary)/60 text-(--color-primary) shrink-0">
                                    {category.skills.length} tools
                                </span>
                            </div>

                                {/* Skills Tag Cloud */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {category.skills.map((skill, idx) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-(--color-surface) border border-(--color-primary)/10 text-(--color-foreground)/85 text-xs sm:text-sm font-medium hover:bg-(--color-primary) hover:text-white hover:border-(--color-primary) hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-default group/skill"
                                            >
                                                <SkillIcon className="w-4 h-4 text-(--color-primary)/70 group-hover/skill:text-white group-hover/skill:scale-110 transition-all duration-200" />
                                                <span>{skill.name}</span>
                                            </div>
                                         );
                                    })}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};