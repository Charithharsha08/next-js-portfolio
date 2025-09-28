"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Toast, ToastProvider } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

export function ProjectsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: "Transport Management System",
      description:
        "A full-stack MERN web application for managing transport operations including vehicle allocation, driver assignments, trip tracking, and customer bookings with role-based access and dashboards.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "/transport-management.png",
      liveUrl: "#",
      githubUrl:
        "https://github.com/Charithharsha08/transport-management-fontend.git",
    },
    {
      id: 2,
      title: "Smart Parking Management System",
      description:
        "Cloud-native Spring Boot project using microservices architecture. Includes API Gateway, Eureka Server, Config Server, and services for vehicles, users, and payments.",
      technologies: ["Spring Boot", "Microservices", "Eureka", "API Gateway"],
      image: "/smart-parking-management.png",
      liveUrl: "#",
      githubUrl:
        "https://github.com/Charithharsha08/Smart-Parking-management-System.git",
    },
    {
      id: 3,
      title: "OceanSync",
      description:
        "JavaFX-based management system for diving centers to manage customers, courses, inventory, and profits with real-time modular data handling.",
      technologies: ["JavaFX", "MySQL", "MVC", "JDK 17"],
      image: "oceancync.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Charithharsha08/newOceansync.git",
    },
    {
      id: 4,
      title: "The Culinary Academy",
      description:
        "Java-based management system using Hibernate ORM and MySQL to streamline student enrollment, courses, instructors, and fee processing.",
      technologies: ["Java", "Hibernate", "MySQL", "Layered Architecture"],
      image: "clunary-acadamy.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Charithharsha08/TheCulinaryAcademy.git",
    },
    {
      id: 5,
      title: "PartsLK – Vehicle Spare Parts Marketplace",
      description:
        "Spring Boot e-commerce platform for buying and selling spare parts. Features authentication (JWT), product management, order handling, and online payments.",
      technologies: ["Spring Boot", "JWT", "MySQL", "REST API"],
      image: "/partsLK.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Charithharsha08/partsLK.git",
    },
    {
      id: 6,
      title: "Computer Doctor",
      description:
        "Web-based JSP e-commerce platform with user registration, product browsing, shopping cart, and order placement features.",
      technologies: ["JSP", "HTML", "CSS", "JavaScript"],
      image: "computer-doctor.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Charithharsha08/computerDoctorEcom.git",
    },
    {
      id: 7,
      title: "Villa Elegance – Hotel Website",
      description:
        "Responsive hotel website built with Bootstrap to showcase rooms, services, and booking options.",
      technologies: ["Bootstrap", "HTML", "CSS"],
      image: "villa-elegance.png",
      liveUrl: "https://elegance-villa.web.app/",
      githubUrl: "https://github.com/Charithharsha08/elegance-villa.git",
    },
    {
      id: 8,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with HTML, CSS, and JavaScript to showcase projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/portfoilo.png",
      liveUrl: "https://charith-harsha-portfolio.web.app/",
      githubUrl: "https://github.com/Charithharsha08/portfolio.git",
    },
    {
      id: 9,
      title: "Minimal Habits Tracker",
      description:
        "A simple mobile app to track daily habits and routines, built with Expo and React Native.",
      technologies: ["Expo", "React Native"],
      image: "/minimal-habit-tracker.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Charithharsha08/Minimal-Habit-Tracker.git",
    },
    {
      id: 10,
      title: "Calculator App",
      description:
        "A basic calculator app with standard arithmetic operations, built using HTML, CSS, and JavaScript.",
      technologies: ["Html", "CSS", "JavaScript"],
      image: "/calculator.png",
      liveUrl: "https://calculator-ad0c6.web.app/",
      githubUrl: "https://github.com/Charithharsha08/calculator.git",
    },
    {
      id: 11,
      title: "ICT Web",
      description:
        "A responsive website for an ICT basic knowledge learning platform , built with HTML, CSS, and JavaScript.",
      technologies: ["Html", "CSS", "JavaScript"],
      image: "/ict-web.png",
      liveUrl: "https://ict-web-50940.web.app/",
      githubUrl: "https://github.com/Charithharsha08/ict-web.git",
    },
    {
      id: 12,
      title: "Pos System",
      description:
        "A simple point-of-sale (POS) system for small businesses, built using HTML, CSS, and JavaScript.",
      technologies: ["Html", "CSS", "JavaScript"],
      image: "/pos.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Charithharsha08/pos-ui.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`text-center mb-16 ${
            hasIntersected ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my real-world projects that showcase my skills in
            full-stack development, microservices, and scalable software
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${
                hasIntersected ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 transition-colors hover:bg-muted hover:text-primary dark:hover:bg-muted dark:hover:text-primary"
                      onClick={() => {
                        if (!project.liveUrl || project.liveUrl === "#") {
                          toast({
                            title: "Live Demo Unavailable",
                            description: `The live demo for "${project.title}" is not available.`,
                            variant: "destructive",
                            duration: 5000,
                            className: "toast-animated",
                          });
                        } else {
                          window.open(
                            project.liveUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>

                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 transition-colors hover:bg-muted hover:text-primary dark:hover:bg-muted dark:hover:text-primary"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
