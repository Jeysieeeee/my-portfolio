/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BriefcaseBusiness, ChevronDown, ChevronUp } from 'lucide-react';

export  function ExperienceSection() {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Flexicon Solutions Inc.",
      period: "Oct 2025 - Present",
      responsibilities:"Built and maintained scalable Vue.js and Nuxt.js applications with efficient state management via Vuex and API integrations using axios. Designed modular architectures with reusable middleware, plugins, and mixins, delivering responsive, high-performance user interfaces with robust validation and seamless user experiences.",
      skills: [
        "JavaScript",
        "TypeScript",
        "Vue",
        "Nuxt.js",
        "Node.js",
        "CSS",
        "Mixins",
        "Vercel",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Groundlink Digital Advertising Services",
      period: "Nov 2023 - Oct 2025",
      responsibilities:
        "Developed and optimized responsive web interfaces using React, Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. Improved legacy systems for better performance and consistency while collaborating with cross-functional teams to deliver high-quality, user-focused solutions. Ensured clean, maintainable code and reliable deployments through GitLab-based CI/CD and version control.",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Websockets",
        "Third-party API Integration",
      ],
    },
     {
      title: "Web Developer",
      company: "ManyFox Media",
      period: "Sept 2023 - Feb 2024",
      responsibilities:
        "Developed and optimized client websites using WordPress, Elementor, Wix, and myRealPage, enhancing performance, usability, and design consistency while collaborating with stakeholders to align technical solutions with business goals.",
    },
    {
      title: "Mobile App Developer",
      company: "SWRTech",
      period: "Feb 2023 - May 2023",
      skills: ["JavaScript","TypeScript" ,"React Native", "Expo", "Tailwind CSS"],
    },
  ];

   const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold px-4 pb-3">
          Professional Experience
        </h2>

        <Card className="grid grid-cols-[auto_1fr] gap-x-4 px-4 py-4">
          {experiences.map((exp, i) => (
            <div key={i} className="contents">
              <div className="flex flex-col items-center gap-1 pt-3">
                <span className="material-symbols-outlined text-primary text-2xl">
                 <BriefcaseBusiness />
                </span>
                {i < experiences.length - 1 && (
                  <div className="w-0.5 bg-border-light dark:bg-border-dark h-full" />
                )}
              </div>

              <div className="experience-entry flex flex-1 flex-col pt-3 pb-8">
                <p className="text-text-light dark:text-text-dark text-base font-medium">
                  {exp.title}
                </p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                  {exp.company} | {exp.period}
                </p>

                {exp.responsibilities && (
                  <details
                    open={expandedIndex === i}
                    className="mt-3 rounded-lg border bg-background-light dark:bg-background-dark px-4 py-2 group"
                  >
                    <summary
                       onClick={() => toggleExpand(i)}
                      className="flex cursor-pointer items-center justify-between py-2 list-none"
                    >
                      <p className="text-sm font-medium">
                        Responsibilities at {exp.company}
                      </p>
                      <span className="material-symbols-outlined text-secondary transition-transform ">
                        <ChevronDown className='group-open:rotate-180'/>
                      </span>
                    </summary>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm pb-2">
                      {exp.responsibilities}
                    </p>
                   
                  </details>
                )}
                 <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm space-y-1 mt-2">
                      {exp.skills && (
                        <>
                          <span className="font-medium">Skills:</span>{" "}
                          {exp.skills.join(", ")}
                        </>
                      ) }
                    </p>
              </div>
            </div>
          ))}
        </Card>
      </section>
  

   
  );
}
