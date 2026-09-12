import { ProfileCard } from "../components/ProfileCard";
import { ArrowRight, Sparkles, FolderGit2 } from "lucide-react";

import {
    SiC,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiGit,
    SiGithub,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiFigma,
    SiUbuntu,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const skills = [
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma },
    { name: "Ubuntu", icon: SiUbuntu },
];

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-12 lg:pt-20 lg:pb-16">
            {/* Subtle decorative background gradients */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-(--color-accent)/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
                    {/* Left / Main Intro Section */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left order-2 lg:order-1">
                        {/* Status Pill */}
                        <div className="animate-fade-in inline-block">
                            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm font-medium text-(--color-primary)">
                                <span className="w-2.5 h-2.5 bg-(--color-highlight) rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                Software Engineer & English Student
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-(--color-foreground) leading-[1.15]">
                                Crafting digital experiences with{" "}
                                <span className="text-(--color-primary) font-serif italic font-normal glow-text block sm:inline">
                                    Code & Creativity
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-(--color-muted-foreground) max-w-xl leading-relaxed text-justify">
                                Turning ideas into meaningful digital experiences through clean code,
                                thoughtful design, and continuous learning. I blend engineering precision
                                with creative vision to build modern, high-impact web applications.
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-(--color-primary) text-white font-medium text-sm sm:text-base hover:bg-(--color-primary)/90 shadow-lg shadow-(--color-primary)/20 hover:shadow-xl hover:shadow-(--color-primary)/30 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <FolderGit2 className="w-4 h-4" />
                                <span>Explore Projects</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-(--color-foreground) font-medium text-sm sm:text-base hover:bg-(--color-secondary)/40 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <Sparkles className="w-4 h-4 text-(--color-accent)" />
                                <span>Get in Touch</span>
                            </a>
                        </div>

                        {/* Key Info / Highlights */}
                        <div className="pt-6 border-t border-(--color-primary)/10 grid grid-cols-3 gap-3 sm:gap-6">
                            <div>
                                <h4 className="text-xs sm:text-sm md:text-base font-bold text-(--color-foreground) tracking-tight">
                                    Based in
                                </h4>
                                <p className="text-xs font-bold sm:text-sm text-(--color-muted-foreground) mt-1 leading-snug">
                                    Phnom Penh, Cambodia
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm md:text-base font-bold text-(--color-foreground) tracking-tight">
                                    Specialized in
                                </h4>
                                <p className="text-xs font-bold sm:text-sm text-(--color-muted-foreground) mt-1 leading-snug">
                                    Full-stack development
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm md:text-base font-bold text-(--color-foreground) tracking-tight">
                                    Projects built
                                </h4>
                                <p className="text-xs font-bold sm:text-sm text-(--color-muted-foreground) mt-1 leading-snug">
                                    03
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Profile Card */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
                        <ProfileCard />
                    </div>
                </div>
                
                 {/* Skill tags */}
                 <div className="mt-8 lg:mt-10 animate-fade-in animation-delay-600">
                     <p className="text-sm font-medium tracking-wide uppercase text-(--color-muted-foreground) mb-4 text-center">
                         Technologies I worked with
                     </p>
                     <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                         <div className="flex animate-marquee w-max">
                             {[...skills, ...skills].map((skill, idx) => {
                                 const Icon = skill.icon;
                                 return (
                                     <div key={idx} className="flex-shrink-0 px-4 py-2">
                                         <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass hover:bg-(--color-surface) transition-all duration-200 group cursor-default shadow-xs hover:shadow-md">
                                             <Icon className="w-5 h-5 text-(--color-primary)/70 group-hover:text-(--color-primary) transition-colors" />
                                             <span className="text-sm sm:text-base font-semibold text-(--color-foreground)/80 group-hover:text-(--color-foreground) transition-colors">
                                                 {skill.name}
                                             </span>
                                         </div>
                                     </div>
                                 );
                             })}
                         </div>
                     </div>
                 </div>
                 </div>
        </section>
    );
};