"use client";

import { Card } from "@/components/Card";
import { CodeXml, Download, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
 liveDemo?:string;
  viewCode?:string;
  downloadApp?:string
  note?:string;
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
  title: "Artificial Turf Installation Website",
  description:
    "A professional and responsive website built for JMH Turf, a family-owned business specializing in artificial turf installation and landscaping services in Goodyear, Arizona. The site highlights their expertise, showcases service details, and provides an easy way for customers to reach out. Designed with a clean layout, engaging visuals, and SEO-friendly structure to ensure strong online visibility and lead generation.",
  tech: ["WordPress", "Elementor", "Custom CSS", "SEO Optimization", "Responsive Design", "JavaScript"],
  image: "/images/works/jmhturf.png",
  liveDemo: "https://jmhturf.com/"
},
  {
    title: "Betting Sites",
    description:
      "A white-label betting platform built from a single codebase, supporting multiple head offices with unique UIs and branding. It uses a modular, theme-based architecture so each site shares core betting logic while customizing layouts, colors, and content per brand.",
    tech: ["React", "NextJS", "TypeScript", "MongoDB", "Web Sockets", "Third-party API Integration", "Tailwind CSS", "ShadCN UI", "Vercel", "AWS S3", "Cloudflare", "GitLab CI/CD"],
 
  },
  {
    title: "Veterinary Clinic Management System",
    description:
      "A comprehensive web-based system designed to streamline operations in veterinary clinics. It enables appointment scheduling, patient record management, billing, and inventory tracking through an intuitive user interface. Built with a focus on efficiency, data accuracy, and user-friendly design, this project showcases skills in full-stack development, database integration, and responsive UI design.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", ],
 image: "/images/works/KHO_Vet.png",
 note:"NOTE: This project is developed for a client and is not open-source."
  },
    {
    title: "Ark – Space Reservation and Renting App with Admin Dashboard",
    description:
      "A full-stack application for booking and managing rental spaces, built with React Native for mobile and React for the admin dashboard. The app allows users to browse, reserve, and rent spaces seamlessly, while the admin dashboard enables real-time management of listings, bookings, and user data. Designed with a focus on scalability, modern UI, and efficient backend integration. ",
    tech: ["TypeScript", "React Native", "Expo Go", "Native Wind", "NextJS", "Tailwind", "ShadCN UI", "MongoDB", "Web Sockets" ],
 image: "/images/works/park_space.png",
 note:"NOTE: This project is developed for a client and is not open-source."
  },
  {
    title: "AI Chat Application and Web",
    description:
      "A cross-platform AI-powered chat application built with React Native and React for web support. It enables users to chat with an intelligent assistant powered by OpenAI’s API. The project showcases seamless mobile and web integration, real-time messaging, and a modern, responsive UI. Designed to highlight skills in cross-platform development, API integration, and state management for smooth performance across iOS, Android, and web browsers",
    tech: ["TypeScript", "React Native", "Expo Go", "Native Wind", "OpenAI API", "NextJS", "Tailwind", "ShadCN UI" ],
 image: "/images/works/chat.png",
 viewCode:'https://github.com/Jeysieeeee/chat-app'
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
            <Card
              key={i}
              className="group flex transform flex-col rounded-xl bg-card-light shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-card-dark p-0 border-0"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="aspect-video w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105">
                    {proj.image ? (  <Image
                    src={proj.image }
                    alt={proj.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />) : 
                  <div className="flex justify-center items-center group-hover:scale-105 h-full w-full bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-2xl">Company Projects</span>
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
                    {proj.description} <span className="text-red-300">{proj.note}</span>
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
              className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-accent-1 px-4 text-sm font-medium leading-normal text-white transition-colors hover:bg-accent-1/90"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </Link>
          )}

          {proj.viewCode && (
            <Link
              href={proj.viewCode}
              target="_blank"
              className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-accent-1/50 bg-transparent px-4 text-sm font-medium leading-normal text-accent-1 transition-colors hover:bg-accent-1/10 dark:text-accent-2 dark:hover:bg-accent-2/10"
            >
              <CodeXml className="w-4 h-4" />
              View Code
            </Link>
          )}
          {proj.downloadApp && (
             <Link
              href={proj.downloadApp}
              target="_blank"
              className="flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-accent-1/50 bg-transparent px-4 text-sm font-medium leading-normal text-accent-1 transition-colors hover:bg-accent-1/10 dark:text-accent-2 dark:hover:bg-accent-2/10"
            >
               <Download />
             Get the App
            </Link>
          )}
        </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
  );
}
