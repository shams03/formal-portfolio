import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "Techsharthi Consultancy Services",
      duration: "Feb 2025 - Present",
      location: "Hyderabad, India",
      description: [
        "Frontend state management using Redux and Redux thunk",
        "Backend API creation for MathSharthi.ai using Django",
        "Product Lead - TechSharthi.ai , all in one solution for using several LLMs using single promp",
      ],
    },
    {
      id: 2,
      role: "Software Developer Intern",
      company: "Swapdigit IT services",
      duration: "June 2024 - July 2025",
      location: "UP, India",
      description: [
        "Developed solutions to analyze historical performance of applications using npm-winston, Prometheus, and Grafana.",
        "Optimized frontend React.js application performance, reducing re-rendering by 50% to 80%.",
      ],
    },
  ];

  const navigateExperience = (direction: "prev" | "next") => {
    if (direction === "prev" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction === "next" && activeIndex < experiences.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <section id="experience" className="bg-white dark:bg-background">
      <div className="container-section">
        <h2 className="section-title font-playfair">Experience</h2>
        <p className="max-w-3xl mb-12 text-muted-foreground text-lg">
          My professional journey has equipped me with valuable skills and
          experiences in software development.
        </p>

        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-muted -ml-px md:ml-0"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative mb-16 timeline-item opacity-0 translate-x-[-100px] ${
                index % 2 === 0
                  ? "md:ml-auto md:pr-0 md:pl-10"
                  : "md:mr-auto md:pl-0 md:pr-10"
              } md:w-1/2 ${index === activeIndex ? "z-10" : "opacity-70"}`}
            >
              <div className="hidden md:block absolute top-6 -right-6 w-6 h-0.5 bg-muted"></div>
              <div className="hidden md:block absolute top-6 -left-6 w-6 h-0.5 bg-muted"></div>

              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "md:-left-3 -left-3" : "md:-right-3 -left-3"
                } h-6 w-6 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-muted"
                } flex items-center justify-center shadow-md transition-colors duration-300`}
              >
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>

              <Card
                className={`card-hover ${
                  index === activeIndex ? "border-primary shadow-lg" : ""
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary font-playfair">
                    {experience.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between mt-1 mb-4">
                    <p className="font-medium">{experience.company}</p>
                    <p className="text-muted-foreground">
                      {experience.duration}
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {experience.location}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateExperience("prev")}
              disabled={activeIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateExperience("next")}
              disabled={activeIndex === experiences.length - 1}
              className="rounded-full"
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
