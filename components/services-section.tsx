"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  MonitorSmartphone,
  Wrench,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "Designing and developing modern, scalable, and responsive web applications using the latest technologies.",
    details:
      "I build end-to-end solutions using React, Next.js, Node.js, Express, and Spring Boot. My focus is on clean code, optimized performance, and secure user authentication, ensuring seamless user experiences.",
  },
  {
    icon: Database,
    title: "Database Design & Integration",
    description:
      "Crafting efficient and optimized database architectures for business-critical applications.",
    details:
      "With expertise in MySQL, MongoDB, and Hibernate ORM, I design normalized schemas, handle migrations, and implement complex queries to ensure smooth and reliable data handling.",
  },
  {
    icon: Cloud,
    title: "Cloud & Microservices",
    description:
      "Building scalable and cloud-native applications with modern microservices architecture.",
    details:
      "I develop cloud-based systems using Spring Boot, API Gateways, Eureka Server, and Config Servers, ensuring modularity, scalability, and fault tolerance in enterprise applications.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI Development",
    description:
      "Creating responsive and user-friendly frontends with attention to detail and performance.",
    details:
      "I specialize in React, Next.js, Bootstrap, and Tailwind CSS, ensuring mobile-first designs and pixel-perfect implementations for professional web applications.",
  },
  {
    icon: Wrench,
    title: "Networking & IT Solutions",
    description:
      "Providing hands-on IT and networking support for small businesses and organizations.",
    details:
      "Experience in LAN setup, troubleshooting, CCTV installation, and hardware maintenance. I help organizations maintain smooth IT operations with minimal downtime.",
  },
];

export function ServicesSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 ${
            hasIntersected ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                hasIntersected ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                {expandedIndex === index && (
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.details}
                  </CardDescription>
                )}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 group"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIndex === index ? "See Less" : "Read More"}
                  {expandedIndex === index ? (
                    <ChevronUp className="h-4 w-4 ml-1 group-hover:-translate-y-1 transition-transform" />
                  ) : (
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
