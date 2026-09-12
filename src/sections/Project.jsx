import { FolderGit2, ArrowUpRight } from "lucide-react";
import Mindful_Study from "../assets/images/projectimg/Mindful_Study.png";
import Domner from "../assets/images/projectimg/Domner.png";
import SmartBudgetTracker from "../assets/images/projectimg/Smart-Budget_Tracker.png";

const projectsData = [
    {
        id: "study-planner",
        title: "Mindful Study - SPBPS",
        description:
            "The Study Planner & Burnout Prevention System is a web-based platform designed to help students manage their academic responsibilities while maintaining a healthy study-life balance.",
        gradient: "from-[#12463F]/15 via-[#7A9CE0]/20 to-[#E9E2D8]/40",
        previewBg: "bg-gradient-to-br from-[#12463F] to-[#1E6B61]",
        previewIcon: "📋",
        image: Mindful_Study,
        liveUrl: "https://github.com/CheachingKov",
    },
    {
        id: "travel-guide",
        title: "DOMNER",
        description:
            "A web-based trip planning platform designed to help users discover tourist destinations efficiently",
        gradient: "from-[#7A9CE0]/20 via-[#12463F]/10 to-[#FAF8F5]",
        previewBg: "bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]",
        previewIcon: "🏛️",
        image: Domner,
        liveUrl: "https://github.com/CheachingKov",
    },
    {
        id: "smart-budget",
        title: "Personal-Budget-Tracker",
        description:
            "The Personal Budget Tracker is a Java-based desktop application utilizing a Swing GUI that helps users effectively manage their personal finances by tracking income and expenses, setting budget limits, and monitoring savings goals.",
        gradient: "from-[#10B981]/15 via-[#12463F]/10 to-[#E9E2D8]/30",
        previewBg: "bg-gradient-to-br from-[#065F46] to-[#059669]",
        previewIcon: "🛍️",
        image: SmartBudgetTracker,
        liveUrl: "https://github.com/CheachingKov",
    },
];

export const Project = () => {
    return (
        <section
            id="projects"
            className="relative py-16 lg:py-20 overflow-hidden bg-(--color-background)"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-accent)/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-semibold tracking-wider uppercase text-(--color-primary)">
                        <FolderGit2 className="w-3.5 h-3.5 text-(--color-accent)" />
                        <span>Featured Projects</span>
                    </div>
                </div>

                {/* Responsive Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projectsData.map((project) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-(--color-border)/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(18,70,63,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Top Subtle Gradient Accents */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`}
                            />

                            <div>
                                {/* Project Card Visual Preview Window */}
                                <div className="relative rounded-2xl overflow-hidden mb-6 border border-black/5 bg-slate-900/5 aspect-16/10 group-hover:border-black/10 transition-colors">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div
                                            className={`absolute inset-0 ${project.previewBg} opacity-90 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center p-4`}
                                        >
                                            <div className="text-center p-6 text-white space-y-2">
                                                <div className="text-4xl sm:text-5xl filter drop-shadow-md select-none transform transition-transform duration-300 group-hover:scale-110">
                                                    {project.previewIcon}
                                                </div>
                                                <p className="text-white/90 text-sm font-semibold tracking-wide uppercase text-shadow-sm">
                                                    {project.title}
                                                </p>
                                            </div>

                                            {/* Subtle overlay grid decoration */}
                                            <div
                                                className="absolute inset-0 opacity-10 pointer-events-none"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                                                    backgroundSize: "16px 16px",
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Project Title & Description */}
                                <div className="space-y-3 mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-(--color-foreground) group-hover:text-(--color-primary) transition-colors flex items-center justify-between">
                                        <span>{project.title}</span>
                                    </h3>
                                    <p className="text-xs sm:text-sm text-(--color-muted-foreground) leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Section: Action Link */}
                            <div className="pt-4 border-t border-(--color-border)/50 mt-auto">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-(--color-primary) text-white text-xs sm:text-sm font-semibold hover:bg-(--color-primary)/90 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <span>Live Demo</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};