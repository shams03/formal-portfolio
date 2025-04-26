import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "VS-code Themed Portfolio Website (LIVE) ",
      description:
        "A fully responsive vscode built on next js with diff themes as per vscode and fun way to navigate.",
      image: "/vscode_portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/shams03/VSCODE-themed-portfolio",
      liveUrl: "https://shamsvscode.vercel.app",
    },
    {
      id: 2,
      title: "RizzCabs Web App",
      description:
        "book cabs, ride with ease, and enjoy a seamless experience with RizzCabs.live tracking using sockets and real-time updates.",
      image: "/rizzCabs.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/shams03/RizzCabs",
      liveUrl: "",
    },
    {
      id: 3,
      title: "batmanStabs chrome-extension",
      description:
        "A chrome extension to convert all open tabs to a .bat file for easy sharing and memory saving. Not published due to paid platform restrictions.Soon to be published",
      image: "/batmanStabs.png",
      technologies: ["JavaScript", "Chrome Extensions API", "HTML", "CSS"],
      githubUrl: "https://github.com/shams03/batmanStabs-chrome-extension",
      liveUrl: "",
    },
    {
      id: 4,
      title: "Go-gRPC Microservices Backend",
      description:
        "Three microservices accounts , orders and products integrated with each connected to their own database for scalability and loose coupling .",
      image: "/go-grpc-microservice.png",
      technologies: [
        "Go",
        "gRPC",
        "PostgreSQL",
        "Docker",
        "ElasticSearch",
        "GraphQl",
      ],
      githubUrl: "https://github.com/shams03/go-ecom-microservice",
      liveUrl: "",
    },
    {
      id: 5,
      title: "Payment System",
      description:
        "Developed a secure and efficient payment system, integrating Webhooks from banks for seamless transactions.",
      image: "",
      technologies: [
        "Turborepo",
        "Next.js",
        "Express.js",
        "Tailwind CSS",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/shams03/Payment-system",
      liveUrl: "",
    },
    {
      id: 6,
      title: "X-clone(Ongoing)",
      description:
        "A full stack Twitter clone built with Next.js , GraphQl , Prisma and Postgresql. Features include user authentication, tweet creation, and real-time updates ,with AWS S3 for image storage.",
      image: "/x-clone.png",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS"],
      githubUrl: "https://github.com/shams03/X-clone",
      liveUrl: "",
    },
    {
      id: 7,
      title: "Emily AI Agent (Ongoing)",
      description:
        " Final Year Group Project (2 person group). End-to-End RAG Pipeline , Collaboration-Aware Summaries , Smarter and More Personalized Than GitHub Copilot, Meeting Summaries Notes , Ask Emily Anything , Credit-Based Access Model",
      image: "/emily.png",
      technologies: [
        "Firebase",
        "tRPC",
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "LangChain",
        "Gemini",
        "AssemblyAI",
      ],
      githubUrl: "https://github.com/vishalvivekm/emily",
      liveUrl: "https://emily-inky.vercel.app",
    },
    {
      id: 8,
      title: "Lock-AR Zero Trust PMS",
      description:
        "Created a zero-trust architecture password management system with client-side encryption and secure password hashing methods..",
      image: "/lockar.png",
      technologies: [
        "JavaScript",
        "MongoDB",
        "React.js",
        "Express.js",
        "bcrypt - core of the project",
      ],
      githubUrl: "https://github.com/shams03/Lock-AR",
      liveUrl: "",
    },
    {
      id: 9,
      title: "Medium Clone (Ongoing)",
      description: "A clone of medium.com .",
      image: "/medium.png",
      technologies: [
        "TypeScript",
        "Hono.js",
        "Cloudfare Workers",
        "Prisma",
        "PostgreSQL",
        "Zod",
      ],
      githubUrl: "https://github.com/shams03/medium-project",
      liveUrl: "",
    },
    {
      id: 10,
      title: "Terminal Portfolio (Old)",
      description: "Old portfolio website in terminal style with proper working commands.",
      image: "/terminal-portfolio.png",
      technologies: [
        "TypeScript",
        "Hono.js",
        "Cloudfare Workers",
        "Prisma",
        "PostgreSQL",
        "Zod",
      ],
      githubUrl: "https://github.com/shams03/Portfolio_Terminal",
      liveUrl: "https://portfolio-terminal-iota-seven.vercel.app/",
    },

  ];

  return (
    <section id="projects" className="bg-background">
      <div className="container-section">
        <h2 className="section-title">Projects</h2>
        <p className="max-w-3xl mb-12 text-muted-foreground text-lg">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-primary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="flex gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                </a>
                {project.liveUrl.length > 0 ? (
                  <span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="flex gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </a>
                  </span>
                ) : (
                  <span></span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
