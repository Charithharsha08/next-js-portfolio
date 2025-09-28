"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [isExpanded, setIsExpanded] = useState(false);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // ✅ valid easing
    },
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-background text-foreground px-4 py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-primary/3 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto relative"
        ref={ref as React.RefObject<HTMLDivElement>}
        variants={containerVariants}
        initial="hidden"
        animate={hasIntersected ? "show" : "hidden"}
      >
        <div
          className={`grid gap-12 items-start transition-all duration-700 ${
            isExpanded ? "lg:grid-cols-1" : "lg:grid-cols-2"
          }`}
        >
          {/* Left side - Main photo */}
          {!isExpanded && (
            <motion.div
              variants={itemVariants}
              className="transition-all duration-700 opacity-100 scale-100 translate-x-0"
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative bg-card rounded-2xl p-6 shadow-xl border border-border/50">
                  <motion.div
                    className="aspect-[4/5] rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="charith-harsha-jayashan.jpg"
                      alt="Charith Harsha Jayashan"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right side - Content */}
          <motion.div
            className="space-y-6 transition-all duration-700"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                About Me
              </motion.h1>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                variants={itemVariants}
              />
            </div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm{" "}
                <span className="text-primary font-semibold">
                  Charith Harsha Jayashan
                </span>
                , an aspiring Software Engineer and{" "}
                <span className="font-semibold">Intern Software Engineer</span>{" "}
                from Galle, Sri Lanka. I specialize in full-stack development,
                cloud-native applications, and scalable system design. With a
                strong foundation in both frontend and backend technologies, I
                enjoy turning ideas into robust, user-friendly solutions. My
                passion lies in building clean, efficient systems that solve
                real-world problems while continuously learning and adapting to
                new technologies and industry trends.
              </p>

              {isExpanded && (
                <motion.div
                  className="space-y-6 transition-all duration-700"
                  initial="hidden"
                  animate="show"
                  variants={containerVariants}
                >
                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    {/* Technical Skills */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">
                        Technical Skills
                      </h3>
                      <div className="space-y-2">
                        {[
                          "Java, Spring Framework, Maven",
                          "JavaScript & TypeScript",
                          "React, Node.js, Express.js",
                          "MySQL & MongoDB",
                          "Hibernate ORM",
                          "Python",
                          "Bootstrap, HTML, CSS",
                          "Git & Version Control",
                        ].map((skill) => (
                          <motion.div
                            key={skill}
                            className="flex items-center space-x-3 group"
                            variants={itemVariants}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                      <h3 className="text-xl font-semibold text-primary">
                        Experience
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors duration-200">
                          <h4 className="font-medium">
                            Trainee Network Technician
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            District Secretariat Galle • 2023
                          </p>
                          <ul className="text-sm list-disc list-inside text-muted-foreground mt-2">
                            <li>Resolved LAN connectivity issues</li>
                            <li>Maintained and configured network equipment</li>
                            <li>Repaired computer hardware</li>
                            <li>Hands-on CCTV installation & maintenance</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Projects */}
                  <motion.div className="space-y-4" variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-primary">
                      Projects
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">
                          Transport Management System
                        </span>{" "}
                        – MERN full-stack app for vehicle allocation, trip
                        tracking, bookings & dashboards.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          Smart Parking Management System
                        </span>{" "}
                        – Microservices with Spring Boot, Eureka, API Gateway.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          OceanSync
                        </span>{" "}
                        – JavaFX & MySQL diving center management system.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          The Culinary Academy
                        </span>{" "}
                        – Java + Hibernate system for course & fee management.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          PartsLK
                        </span>{" "}
                        – Spring Boot e-commerce app for spare parts.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          Computer Doctor
                        </span>{" "}
                        – JSP-based e-commerce site with cart & order features.
                      </li>
                    </ul>
                  </motion.div>

                  {/* Philosophy */}
                  <motion.div className="space-y-4" variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-primary">
                      Philosophy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I believe in building clean, scalable solutions with
                      strong backend logic and intuitive frontends. My focus is
                      on efficiency, maintainability, and delivering meaningful
                      user experiences.
                    </p>
                  </motion.div>

                  {/* Beyond Code */}
                  <motion.div className="space-y-4" variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-primary">
                      Beyond Code
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Outside coding, I enjoy exploring new technologies,
                      contributing to open-source projects, and mentoring peers.
                      I’m passionate about problem-solving, teamwork, and
                      continuous learning.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {/* Toggle Button */}
              <motion.div variants={itemVariants}>
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      See More
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
