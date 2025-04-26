import React from "react";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const HeroSection = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/shams03",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/shams-zaman-1392522ab/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/shams_zero",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center bg-background"
    >
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-playfair">
              Hi, I'm <span className="text-primary">Shams Zaman</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full stack developer & DevOps Enthusiast
            </h2>
            <p className="text-lg mb-8 max-w-lg text-muted-foreground">
              I build full stack interactive web experiences with cloud
              management. Passionate about creating clean, user-friendly
              interfaces.
            </p>
            <p className="text-lg mb-8 max-w-lg text-muted-foreground">
              Working with Gen AI
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:bg-accent p-2 rounded-lg transition-colors"
                >
                  {link.icon}
                </a>
              ))}

              <a href="/shamsResume.pdf" download>
                <Button variant="default" className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-xl bg-card relative w-full aspect-video">
              {/* <video
                className="w-full aspect-video object-cover"
                controls
                poster="/placeholder.svg"
                preload="metadata"
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <iframe
                src={`https://www.youtube.com/embed/3IedeyqgFQ4?autoplay=1&mute=1&rel=0&controls=1&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            <p className="mt-3 text-sm text-center text-muted-foreground">
              Watch my quick introduction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
