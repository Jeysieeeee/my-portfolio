"use client";

import { Button } from "@/components/Button";
import { CodeXml, Download, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
 liveDemo?:string;
  viewCode?:string;
  downloadApp?:string
}

const projects: Project[] = [
  {
    title: "Restaurant Business Website",
    description:
      "Grazie Ristorante’s website is a responsive, brochure-style restaurant site built to highlight the brand’s Italian dining experience. It features a visually driven layout with high-quality imagery, intuitive navigation, and clear calls-to-action for reservations and contact, optimized for performance and mobile usability",
    tech: ["Wix", "HTML", "CSS"],
    image:
      "/images/works/grazie.png",
   liveDemo:'https://www.grazie.ca/'
  },
  {
    title: "Real State Listing Platform",
    description:
      "A polished, responsive real-estate brokerage site built to showcase property listings, highlight the team’s market expertise, and generate qualified leads. Featuring a clean hero area, intuitive navigation, high-quality imagery, and a lead capture/contact form, it is engineered for performance and mobile optimization. On the technical side, the build emphasizes modular components, SEO-friendly markup, fast load times (image lazy-loading, minimal render blocking), and a straightforward CMS/listings integration to ensure property data stays up to date.",
    tech: ["Wordpress", "Elementor", "Estated API"],
    image:
      "/images/works/stanway.png",
    liveDemo:'https://www.stanwayrealestate.com/'
  },
  {
    title: "Betting Sites",
    description:
      "A white-label betting platform built from a single codebase, supporting multiple head offices with unique UIs and branding. It uses a modular, theme-based architecture so each site shares core betting logic while customizing layouts, colors, and content per brand.",
    tech: ["React", "NextJS", "TypeScript", "MongoDB", "Web Sockets", "Third-party API Integration", "Tailwind CSS", "ShadCN UI", "Vercel", "AWS S3", "Cloudflare", "GitLab CI/CD"],
 
  },
    {
    title: "Augmented Reality Mobile App",
    description:
      "An augmented reality (AR) mobile app showcasing historical sites in Camarines Norte. Built with ARKit/ARCore and geolocation features, it allows users to explore landmarks through 3D models, animations, and interactive information overlays, providing an immersive educational experience on both iOS and Android.",
    tech: ["C++", "Java", "Unity", "ARCore", "ARKit", "Vuforia", ],
 image: "/images/works/ar1.jpg",
 downloadApp:'https://drive.google.com/drive/folders/1L7oiG3ONkO4ug1X6k2XnXuzY0amiWsX9'
  },
];

export default function ProjectsPage() {
 
  return (
      <section >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl bg-card-light shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card-dark"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-video w-full overflow-hidden">
                    {proj.image ? (  <Image
                    src={proj.image }
                    alt={proj.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />) : 
                  <div className="flex justify-center items-center group-hover:scale-105 h-full w-full bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-2xl">Company Property</span>
                  </div>
                  }
                
                </div>
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div className="flex flex-col gap-3">
                  <p className="text-xl font-bold text-text-light dark:text-text-dark">
                    {proj.title}
                  </p>
                  <p className="text-base text-accent-1 dark:text-gray-400">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent-2/20 px-3 py-1 text-xs font-semibold text-accent-2 dark:bg-accent-2/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

               
                <div className="flex items-center gap-4">
          {proj.liveDemo && (
            <Link
              href={proj.liveDemo}
              target="_blank"
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors border border-[#98dad9]/50 bg-transparent text-[#98dad9] hover:bg-[#98dad9]/10 dark:text-accent-2 dark:hover:bg-accent-2/10"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </Link>
          )}

          {proj.viewCode && (
            <Link
              href={proj.viewCode}
              target="_blank"
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors bg-[#98dad9] text-white hover:bg-opacity-90"
            >
              <CodeXml className="w-4 h-4" />
              View Code
            </Link>
          )}
          {proj.downloadApp && (
             <Link
              href={proj.downloadApp}
              target="_blank"
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors bg-[#98dad9] text-white hover:bg-opacity-90"
            >
               <Download />
             Get the App
            </Link>
          )}
        </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
