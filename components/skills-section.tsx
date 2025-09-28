"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, easeOut } from "framer-motion";
import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  //SiCsharp,
  SiPhp,
  SiGo,
  SiRust,
  SiKotlin,
  SiSwift,
  SiRuby,

  // Frontend
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiHtml5,
  SiCss3,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiDotnet,
  SiGraphql,

  // Databases
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSqlite,
  SiRedis,
  SiSupabase,

  // Tools & DevOps
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  //SiAmazonaws,
  SiGooglecloud,
  SiLinux,
  //SiVisualstudiocode,
  SiPostman,

  // Mobile
  SiExpo,
  SiFlutter,
  SiApple,
  SiAndroid,

  // Design & Collaboration
  SiFigma,
  SiAdobexd,
  SiCanva,
  SiNotion,
  SiSlack,
  SiJira,
} from "react-icons/si";

// ✅ Define types
type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  // ✅ Strongly typed skills array
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          level: 95,
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          level: 90,
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "Python",
          level: 85,
          icon: <SiPython className="text-green-500" />,
        },
        {
          name: "Java",
          level: 98,
          icon: <SiOpenjdk className="text-orange-600" />,
        },
        // {
        //   name: "C++",
        //   level: 80,
        //   icon: <SiCplusplus className="text-blue-600" />,
        // },
        // {
        //   name: "C#",
        //   level: 75,
        //   icon: <SiCsharp className="text-purple-600" />,
        // },
        // { name: "PHP", level: 70, icon: <SiPhp className="text-indigo-600" /> },
        // { name: "Go", level: 70, icon: <SiGo className="text-cyan-500" /> },
        // {
        //   name: "Rust",
        //   level: 65,
        //   icon: <SiRust className="text-orange-700" />,
        // },
        // {
        //   name: "Kotlin",
        //   level: 75,
        //   icon: <SiKotlin className="text-purple-500" />,
        // },
        // {
        //   name: "Swift",
        //   level: 70,
        //   icon: <SiSwift className="text-orange-500" />,
        // },
        // { name: "Ruby", level: 60, icon: <SiRuby className="text-red-600" /> },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        {
          name: "React",
          level: 95,
          icon: <SiReact className="text-cyan-400" />,
        },
        {
          name: "Next.js",
          level: 90,
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        // {
        //   name: "Vue.js",
        //   level: 85,
        //   icon: <SiVuedotjs className="text-green-500" />,
        // },
        // {
        //   name: "Angular",
        //   level: 80,
        //   icon: <SiAngular className="text-red-600" />,
        // },
        {
          name: "Tailwind CSS",
          level: 95,
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        {
          name: "Bootstrap",
          level: 85,
          icon: <SiBootstrap className="text-purple-600" />,
        },
        // {
        //   name: "SASS/SCSS",
        //   level: 80,
        //   icon: <SiSass className="text-pink-500" />,
        // },
        {
          name: "HTML5",
          level: 95,
          icon: <SiHtml5 className="text-orange-600" />,
        },
        { name: "CSS3", level: 95, icon: <SiCss3 className="text-blue-500" /> },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        {
          name: "Node.js",
          level: 90,
          icon: <SiNodedotjs className="text-green-500" />,
        },
        {
          name: "Express.js",
          level: 85,
          icon: <SiExpress className="text-gray-500" />,
        },
        {
          name: "Django",
          level: 80,
          icon: <SiDjango className="text-green-700" />,
        },
        // {
        //   name: "Flask",
        //   level: 75,
        //   icon: <SiFlask className="text-gray-600" />,
        // },
        {
          name: "Spring Boot",
          level: 90,
          icon: <SiSpringboot className="text-green-600" />,
        },
        // {
        //   name: "ASP.NET Core",
        //   level: 70,
        //   icon: <SiDotnet className="text-blue-600" />,
        // },
        // {
        //   name: "GraphQL",
        //   level: 75,
        //   icon: <SiGraphql className="text-pink-500" />,
        // },
        { name: "REST APIs", level: 95, icon: "🔗" }, // fallback
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          level: 90,
          icon: <SiMongodb className="text-green-600" />,
        },
        {
          name: "MySQL",
          level: 85,
          icon: <SiMysql className="text-blue-500" />,
        },
        // {
        //   name: "PostgreSQL",
        //   level: 85,
        //   icon: <SiPostgresql className="text-sky-700" />,
        // },
        {
          name: "Firebase",
          level: 80,
          icon: <SiFirebase className="text-yellow-500" />,
        },
        // {
        //   name: "SQLite",
        //   level: 70,
        //   icon: <SiSqlite className="text-blue-700" />,
        // },
        // {
        //   name: "Redis",
        //   level: 75,
        //   icon: <SiRedis className="text-red-600" />,
        // },
        // {
        //   name: "Supabase",
        //   level: 75,
        //   icon: <SiSupabase className="text-green-500" />,
        // },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 95, icon: <SiGit className="text-orange-600" /> },
        {
          name: "GitHub",
          level: 90,
          icon: <SiGithub className="text-black dark:text-white" />,
        },
        // {
        //   name: "GitLab",
        //   level: 85,
        //   icon: <SiGitlab className="text-orange-500" />,
        // },
        {
          name: "Docker",
          level: 80,
          icon: <SiDocker className="text-blue-400" />,
        },
        {
          name: "Kubernetes",
          level: 70,
          icon: <SiKubernetes className="text-blue-500" />,
        },
        // {
        //   name: "Jenkins",
        //   level: 70,
        //   icon: <SiJenkins className="text-red-600" />,
        // },
        // {
        //   name: "AWS",
        //   level: 75,
        //   icon: <SiAmazonaws className="text-orange-500" />,
        // },
        // {
        //   name: "GCP",
        //   level: 70,
        //   icon: <SiGooglecloud className="text-blue-400" />,
        // },
        { name: "Linux", level: 60, icon: <SiLinux className="text-black" /> },
        // {
        //   name: "VS Code",
        //   level: 95,
        //   icon: <SiVisualstudiocode className="text-blue-500" />,
        // },
        {
          name: "Postman",
          level: 90,
          icon: <SiPostman className="text-orange-500" />,
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native",
          level: 85,
          icon: <SiReact className="text-cyan-400" />,
        },
        { name: "Expo", level: 80, icon: <SiExpo className="text-black" /> },
        {
          name: "Flutter",
          level: 20,
          icon: <SiFlutter className="text-blue-400" />,
        },
        {
          name: "iOS Development",
          level: 65,
          icon: <SiApple className="text-gray-500" />,
        },
        {
          name: "Android Development",
          level: 80,
          icon: <SiAndroid className="text-green-600" />,
        },
      ],
    },
    {
      title: "Design & Collaboration",
      skills: [
        {
          name: "Figma",
          level: 85,
          icon: <SiFigma className="text-pink-500" />,
        },
        // {
        //   name: "Adobe XD",
        //   level: 75,
        //   icon: <SiAdobexd className="text-pink-600" />,
        // },
        {
          name: "Canva",
          level: 80,
          icon: <SiCanva className="text-blue-500" />,
        },
        // {
        //   name: "Notion",
        //   level: 90,
        //   icon: <SiNotion className="text-black dark:text-white" />,
        // },
        {
          name: "Slack",
          level: 85,
          icon: <SiSlack className="text-purple-500" />,
        },
        // { name: "Jira", level: 80, icon: <SiJira className="text-blue-600" /> },
      ],
    },
  ];

  // ✅ Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 flex items-center"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={hasIntersected ? "show" : "hidden"}
      >
        {/* Heading */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use
            to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={skillVariants}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          hasIntersected
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
