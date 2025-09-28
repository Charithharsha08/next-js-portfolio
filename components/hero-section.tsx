"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";

export function HeroSection() {
const { ref, hasIntersected } = useIntersectionObserver();

  const hireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCv = () => {
    const fileId = "1RJw4VVAf1FwLNSdWEWXIxzfoZidK9B44";
    const cvUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Charith_Harsha_Jayashan_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      if (!document.hasFocus()) return;
      window.open(cvUrl, "_blank");
    }, 1000);
  };

  return (
    <div
      id="home"
      className="min-h-screen pt-20 bg-gradient-to-br from-background via-muted/50 to-background text-foreground relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Content Section */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref as React.RefObject<HTMLDivElement>}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: -20 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary text-lg font-medium tracking-wide uppercase">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hello I'm{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Charith Harsha
                </span>
              </motion.h1>

              <motion.h2
                className="text-2xl lg:text-3xl font-light text-muted-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Jayashan
              </motion.h2>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-3 pt-4"
                initial={{ opacity: 0 }}
                animate={hasIntersected ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/60" />
                <span className="text-xl font-semibold text-primary tracking-wide">
                  Software Engineer
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-primary/60 to-primary" />
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Passionate about creating innovative solutions and building
              exceptional digital experiences that make a difference.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button
                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-3 text-primary-foreground"
                onClick={hireMe}
              >
                <span>Hire Me</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                className="group relative px-8 py-4 bg-secondary/20 hover:bg-secondary/30 backdrop-blur-sm border border-border hover:border-border/60 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                onClick={downloadCv}
              >
                <span>Download CV</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center lg:justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative group"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {/* Glow behind */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-2xl opacity-30"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <motion.img
                  className="w-full h-full object-cover"
                  src="/software-engineer-portrait.jpg"
                  alt="Portrait of Charith Harsha Jayashan"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Decorative Dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/80 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/60 rounded-full"
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
