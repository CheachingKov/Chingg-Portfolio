import Profile_Pic from "../assets/images/profile/Profile_Pic.png";

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.94 0 1.7-.76 1.7-1.7s-.76-1.7-1.7-1.7-1.7.76-1.7 1.7.76 1.7 1.7 1.7m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const TelegramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const ProfileCard = ({
  name = "Kov Cheaching",
  tagline = "A software developer who builds innovative solutions with code and creativity.",
  image = Profile_Pic,
  socialLinks = [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/cheaching-kov-5267503ba/",
      label: "Visit LinkedIn profile",
    },
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/CheachingKov",
      label: "Visit GitHub profile",
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: "https://t.me/Cheaching_Kov",
      label: "Contact on Telegram",
    },
    {
      name: "Email",
      icon: MailIcon,
      url: "mailto:kovcheaching20@gmail.com",
      label: "Send an email",
    },
  ],
}) => {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] mx-auto lg:ml-auto lg:mr-0">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-b from-(--color-primary)/20 to-(--color-accent)/25 rounded-[26px] blur-xl opacity-40 pointer-events-none" />

      {/* Main Card Container */}
      <div className="relative bg-(--color-primary) text-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 pb-8 sm:pb-9 shadow-[0_20px_50px_rgba(18,70,63,0.35)] ring-1 ring-white/10 overflow-hidden">
        {/* Profile Image Container */}
        <div className="relative w-full aspect-[4/5] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-black/20 shadow-inner">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient vignette at bottom of photo for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="pt-6 sm:pt-7 text-center space-y-2 relative z-10 px-1">
          {/* Name */}
          <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug">
            {name}
          </h2>

          {/* Subtitle / Tagline */}
          <p className="text-[13px] sm:text-[14px] text-(--color-secondary)/90 font-normal leading-relaxed max-w-[260px] mx-auto">
            {tagline}
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-5 pt-3.5 sm:pt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label || social.name}
                  className="p-1 text-(--color-accent) hover:text-(--color-accent-hover) transition-all duration-200 hover:scale-120 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) rounded-lg"
                >
                  <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
