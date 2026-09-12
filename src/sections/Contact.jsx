import { useState } from "react";
import { Send, Mail, CheckCircle2, Copy, Check, ArrowUpRight } from "lucide-react";

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

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailAddress = "cheachingkov@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/cheaching-kov-5267503ba/",
      icon: LinkedInIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/CheachingKov",
      icon: GithubIcon,
    },
    {
      name: "Telegram",
      href: "https://t.me/CheachingKov",
      icon: TelegramIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-20 overflow-hidden bg-(--color-background)"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-(--color-accent)/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-semibold tracking-wider uppercase text-(--color-primary)">
            <Send className="w-3.5 h-3.5 text-(--color-accent)" />
            <span>Get in Touch</span>
          </div>
        </div>

        {/* Contact Form Container (Matches user reference) */}
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-(--color-border)/80 p-8 sm:p-10 text-center space-y-4 animate-fade-in shadow-xs">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 mx-auto flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-(--color-foreground)">
                Message Ready to Send!
              </h3>
              <p className="text-sm text-(--color-muted-foreground) max-w-md mx-auto leading-relaxed">
                Your email client has been prepared with your message. I will review it and get back to you soon.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-(--color-primary) text-white text-xs sm:text-sm font-semibold hover:bg-(--color-primary)/90 shadow-sm transition-all cursor-pointer mt-2"
              >
                <span>Send Another Message</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm sm:text-base font-semibold text-(--color-primary) mb-2 tracking-tight"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-(--color-border) bg-white/90 text-sm sm:text-base text-(--color-foreground) placeholder:text-(--color-muted-foreground)/60 focus:bg-white focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/15 shadow-xs transition-all outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm sm:text-base font-semibold text-(--color-primary) mb-2 tracking-tight"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-(--color-border) bg-white/90 text-sm sm:text-base text-(--color-foreground) placeholder:text-(--color-muted-foreground)/60 focus:bg-white focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/15 shadow-xs transition-all outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm sm:text-base font-semibold text-(--color-primary) mb-2 tracking-tight"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in your skills!"
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-(--color-border) bg-white/90 text-sm sm:text-base text-(--color-foreground) placeholder:text-(--color-muted-foreground)/60 focus:bg-white focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/15 shadow-xs transition-all resize-y outline-none"
                />
              </div>

              {/* Bottom Row with SEND Button aligned right */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-xl bg-(--color-primary) hover:bg-(--color-primary)/90 text-white font-bold tracking-wider text-sm sm:text-base uppercase shadow-md shadow-(--color-primary)/20 hover:shadow-lg hover:shadow-(--color-primary)/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "SENDING..." : "SEND"}
                </button>
              </div>
            </form>
          )}

          {/* Social Channels & Direct Contact Links */}
          <div className="mt-12 pt-8 border-t border-(--color-border)/70 flex flex-wrap items-center justify-between gap-4">
            {/* Quick Copy Email */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-(--color-muted-foreground)">
              <Mail className="w-4 h-4 text-(--color-primary)" />
              <a
                href={`mailto:${emailAddress}`}
                className="hover:text-(--color-primary) transition-colors font-medium text-(--color-foreground)"
              >
                {emailAddress}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md text-(--color-muted-foreground) hover:text-(--color-primary) hover:bg-white/60 transition-colors cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-(--color-border)/70 text-xs font-medium text-(--color-foreground) hover:bg-white hover:border-(--color-primary)/40 transition-all group"
                  >
                    <Icon className="w-3.5 h-3.5 text-(--color-primary) group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-(--color-muted-foreground) group-hover:text-(--color-primary) transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer Credit */}
        <div className="mt-14 text-center text-xs text-(--color-muted-foreground) space-y-1">
          <p>
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-(--color-foreground)">
              Kov Cheaching
            </span>
            .
          </p>
          <p className="text-[11px] text-(--color-muted-foreground)/80">
            Phnom Penh, Cambodia • © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};