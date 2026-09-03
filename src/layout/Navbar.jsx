import { CodeXml, FolderGit2, Milestone, Send } from "lucide-react";

const MaterialHomeIcon = ({ className }) => (
    <span className={`material-symbols-outlined text-[20px] leading-none select-none ${className || ""}`}>
        home
    </span>
);

const navLinks = [
    { href: "#hero", label: "Home", icon: MaterialHomeIcon },
    { href: "#techstack", label: "Tech Stack", icon: CodeXml },
    { href: "#projects", label: "Projects", icon: FolderGit2 },
    { href: "#experience", label: "Experience", icon: Milestone },
    { href: "#contact", label: "Contact", icon: Send },
];

export const Navbar = () => {
    return (
        <nav
            aria-label="Main Navigation"
            className="fixed z-40 flex items-center left-1/2 -translate-x-1/2 bottom-5 rounded-[20px] px-5 py-2.5 gap-2 bg-[#fafafa]/95 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.08)] md:top-6 md:bottom-auto md:shadow-none md:rounded-[15px] md:px-2 md:py-1 md:gap-1"
        >
            {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                    <a
                        key={index}
                        href={link.href}
                        aria-label={link.label}
                        className="group relative p-2 text-(--color-foreground)/75 hover:text-(--color-primary) rounded-lg transition-colors flex items-center justify-center"
                    >
                        <Icon className="w-5 h-5 transition-transform duration-200" />

                        {/* Floating Tooltip below */}
                        <span className="pointer-events-none absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-[-4px] group-hover:translate-y-0 scale-95 group-hover:scale-100 bg-(--color-primary) text-white text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap hidden sm:block">
                            {link.label}
                        </span>
                    </a>
                );
            })}
        </nav>
    );
};
