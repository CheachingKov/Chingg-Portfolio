import { useState, useEffect, useRef } from "react";
import { Milestone } from "lucide-react";

const experiences = [
  {
    id: "next-gen",
    role: "Computer Science Trainer",
    organization: "Next-Gen Engagement Program",
    period: "Aug. 2026 – Present",
    isCurrent: true,
    location: "Phnom Penh, Cambodia",
    type: "Mentorship & Training",
    description:
      "Taught junior students fundamental subjects and core concepts, guiding them to build strong academic and problem-solving foundations.",
  },
  {
    id: "IFL-education",
    role: "English Student",
    organization: "Institute of Foreign Languages (IFL)",
    period: "Jan. 2025 – Present",
    isCurrent: false,
    location: "Phnom Penh, Cambodia",
    type: "Education",
    description:
      "Studying English at the Institute of Foreign Languages (IFL) pursuing a Bachelor's degree in English, focusing on advanced communication, academic writing, and professional language skills.",
  },
  {
    id: "cadt-education",
    role: "Computer Science Student",
    organization: "Cambodia Academy of Digital Technology",
    period: "Dec. 2024 – Present",
    isCurrent: true,
    location: "CADT, Phnom Penh",
    type: "Education",
    description:
      "Studied Computer Science at Cambodia Academy of Digital Technology (CADT) pursuing a Bachelor's degree in Computer Science specializing in Software Engineering.",
  },
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRefs.current.length) return;

      const triggerY = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementPoint = rect.top + rect.height * 0.35;
        const distance = Math.abs(elementPoint - triggerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="relative py-16 lg:py-20 overflow-hidden bg-(--color-background)"
    >
      {/* Subtle Engineering Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-primary) 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-(--color-accent)/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-semibold tracking-wider uppercase text-(--color-primary)">
            <Milestone className="w-3.5 h-3.5 text-(--color-accent)" />
            <span>Experience</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Spine Line */}
          <div className="absolute top-6 bottom-6 left-5 sm:left-8 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-(--color-primary)/25 via-(--color-accent)/35 to-(--color-primary)/15 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Center Node Marker */}
                  <div className="absolute left-5 sm:left-8 md:left-1/2 -translate-x-1/2 top-7 z-20 flex items-center justify-center">
                    <div
                      className="relative flex items-center justify-center cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Outer soft halo aura (matches screenshot) */}
                      <span
                        className={`absolute w-11 h-11 rounded-full bg-emerald-500/15 transition-all duration-500 pointer-events-none ${
                          isActive
                            ? "scale-100 opacity-100 animate-pulse"
                            : "scale-50 opacity-0"
                        }`}
                      />

                      {/* Gentle ping animation when active */}
                      {isActive && (
                        <span className="absolute w-7 h-7 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
                      )}

                      {/* Node circular border & center dot */}
                      <div
                        className={`w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 shadow-xs ${
                          isActive
                            ? "border-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.55)] scale-110"
                            : "border-(--color-primary)/40 scale-100 hover:border-(--color-primary)"
                        }`}
                      >
                        <div
                          className={`rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-2 h-2 bg-emerald-500"
                              : "w-1.5 h-1.5 bg-(--color-primary)/40"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 relative ${
                      isEven
                        ? "pl-14 sm:pl-20 md:pl-0 md:pr-12"
                        : "hidden md:block md:pr-12 md:invisible"
                    }`}
                  >
                    {isEven && (
                      <>
                        <ExperienceCard item={item} />
                        {/* Desktop connector from card to center spine */}
                        <div
                          className={`hidden md:block absolute right-0 top-10 w-12 transition-all duration-300 pointer-events-none ${
                            isActive
                              ? "h-[2px] bg-gradient-to-r from-emerald-500/20 to-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.35)]"
                              : "h-[1.5px] bg-gradient-to-r from-(--color-primary)/10 to-(--color-primary)/25"
                          }`}
                        />
                        {/* Mobile connector from left spine to card */}
                        <div
                          className={`block md:hidden absolute left-5 sm:left-8 top-10 w-9 sm:w-12 transition-all duration-300 pointer-events-none ${
                            isActive
                              ? "h-[2px] bg-gradient-to-r from-emerald-500/60 to-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.35)]"
                              : "h-[1.5px] bg-gradient-to-r from-(--color-primary)/25 to-(--color-primary)/10"
                          }`}
                        />
                      </>
                    )}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 relative ${
                      !isEven
                        ? "pl-14 sm:pl-20 md:pl-12"
                        : "hidden md:block md:pl-12 md:invisible"
                    }`}
                  >
                    {!isEven && (
                      <>
                        <ExperienceCard item={item} />
                        {/* Desktop connector from center spine to card */}
                        <div
                          className={`hidden md:block absolute left-0 top-10 w-12 transition-all duration-300 pointer-events-none ${
                            isActive
                              ? "h-[2px] bg-gradient-to-r from-emerald-500/60 to-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.35)]"
                              : "h-[1.5px] bg-gradient-to-r from-(--color-primary)/25 to-(--color-primary)/10"
                          }`}
                        />
                        {/* Mobile connector from left spine to card */}
                        <div
                          className={`block md:hidden absolute left-5 sm:left-8 top-10 w-9 sm:w-12 transition-all duration-300 pointer-events-none ${
                            isActive
                              ? "h-[2px] bg-gradient-to-r from-emerald-500/60 to-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.35)]"
                              : "h-[1.5px] bg-gradient-to-r from-(--color-primary)/25 to-(--color-primary)/10"
                          }`}
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ item }) => {
  return (
    <article className="group relative bg-white/85 backdrop-blur-md rounded-3xl border border-(--color-border)/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(18,70,63,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Main Title: Organization / Institute (Matches reference) */}
      <h3 className="text-xl sm:text-[22px] font-bold tracking-tight text-(--color-foreground) group-hover:text-(--color-primary) transition-colors leading-snug">
        {item.organization}
      </h3>

      {/* Sub-row: Role & Date Range (Side by side) */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 mt-2 mb-3.5 text-sm sm:text-base">
        <span className="font-semibold text-(--color-primary)">
          {item.role}
        </span>
        <span className="text-xs sm:text-sm text-(--color-muted-foreground)">
          {item.period}
        </span>
      </div>

      {/* Description Paragraph */}
      <p className="text-sm sm:text-[14.5px] text-(--color-muted-foreground) leading-relaxed">
        {item.description}
      </p>

      {/* Skills / Key Highlights */}
      {item.skills && item.skills.length > 0 && (
        <div className="mt-5 pt-4 border-t border-(--color-border)/60 flex flex-wrap gap-1.5 sm:gap-2">
          {item.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-(--color-surface) text-(--color-foreground)/80 border border-(--color-border)/60 group-hover:border-(--color-primary)/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};