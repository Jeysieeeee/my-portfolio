"use client";

import {
  ChevronLeft,
  ChevronRight,
  CodeXml,
  Download,
  Eye,
  Images,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  /** Natural pixel size of the image file */
  width?: number;
  height?: number;
  /** Small screenshot that must never be upscaled — rendered contained in a frame */
  lowRes?: boolean;
  /** Extra images shown as a swipeable carousel in the modal, like an IG post */
  gallery?: GalleryImage[];
  liveDemo?: string;
  viewCode?: string;
  downloadApp?: string;
  note?: string;
}

const projects: Project[] = [
  {
    title: "BRE – Real Estate Savings App",
    description:
      "BRE (Bagwis Real Estate) is a savings platform that helps Students, Riders, OFWs, Breadwinners, and BPO workers achieve their property goals through disciplined, milestone-driven saving. I built the full ecosystem: a mobile app for Android and iOS where users track savings goals, milestones, badges, and emergency funds; a public landing page; and an admin dashboard for managing users, savings activity, and the affiliate/referral program.",
    tech: [
      "TypeScript",
      "React Native",
      "Expo Go",
      "NextJS",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    image: "/images/works/bre.png",
    width: 1600,
    height: 1000,
    gallery: [
      {
        src: "/images/works/bre.png",
        width: 1600,
        height: 1000,
        alt: "BRE landing page",
      },
      {
        src: "/images/works/bre-admin.png",
        width: 1600,
        height: 837,
        alt: "BRE admin dashboard",
      },
      {
        src: "/images/works/bre-dashboard.png",
        width: 900,
        height: 1947,
        alt: "BRE mobile app dashboard",
      },
    ],
    liveDemo: "https://savingsbre.online/",
    downloadApp: "https://savingsbre.online/download?ref=jey999",
  },
  {
    title: "Restaurant Business Website",
    description:
      "Grazie Ristorante’s website is a responsive, brochure-style restaurant site built to highlight the brand’s Italian dining experience. It features a visually driven layout with high-quality imagery, intuitive navigation, and clear calls-to-action for reservations and contact, optimized for performance and mobile usability",
    tech: ["Wix", "HTML", "CSS"],
    image: "/images/works/grazie.png",
    width: 1600,
    height: 1000,
    liveDemo: "https://www.grazie.ca/",
  },
  {
    title: "Real State Listing Platform",
    description:
      "A polished, responsive real-estate brokerage site built to showcase property listings, highlight the team’s market expertise, and generate qualified leads. Featuring a clean hero area, intuitive navigation, high-quality imagery, and a lead capture/contact form, it is engineered for performance and mobile optimization. On the technical side, the build emphasizes modular components, SEO-friendly markup, fast load times (image lazy-loading, minimal render blocking), and a straightforward CMS/listings integration to ensure property data stays up to date.",
    tech: ["Wordpress", "Elementor", "Estated API"],
    image: "/images/works/stanway.png",
    width: 1600,
    height: 1000,
    liveDemo: "https://www.stanwayrealestate.com/",
  },
  {
    title: "Artificial Turf Installation Website",
    description:
      "A professional and responsive website built for JMH Turf, a family-owned business specializing in artificial turf installation and landscaping services in Goodyear, Arizona. The site highlights their expertise, showcases service details, and provides an easy way for customers to reach out. Designed with a clean layout, engaging visuals, and SEO-friendly structure to ensure strong online visibility and lead generation.",
    tech: [
      "WordPress",
      "Elementor",
      "Custom CSS",
      "SEO Optimization",
      "Responsive Design",
      "JavaScript",
    ],
    image: "/images/works/jmhturf.png",
    width: 1600,
    height: 1000,
    liveDemo: "https://jmhturf.com/",
  },
  {
    title: "Betting Sites",
    description:
      "A white-label betting platform built from a single codebase, supporting multiple head offices with unique UIs and branding. It uses a modular, theme-based architecture so each site shares core betting logic while customizing layouts, colors, and content per brand.",
    tech: [
      "React",
      "NextJS",
      "TypeScript",
      "MongoDB",
      "Web Sockets",
      "Third-party API Integration",
      "Tailwind CSS",
      "ShadCN UI",
      "Vercel",
      "AWS S3",
      "Cloudflare",
      "GitLab CI/CD",
    ],
  },
  {
    title: "Veterinary Clinic Management System",
    description:
      "A comprehensive web-based system designed to streamline operations in veterinary clinics. It enables appointment scheduling, patient record management, billing, and inventory tracking through an intuitive user interface. Built with a focus on efficiency, data accuracy, and user-friendly design, this project showcases skills in full-stack development, database integration, and responsive UI design.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    image: "/images/works/KHO_Vet.png",
    width: 606,
    height: 156,
    lowRes: true,
    note: "NOTE: This project is developed for a client and is not open-source.",
  },
  {
    title: "Ark – Space Reservation and Renting App with Admin Dashboard",
    description:
      "A full-stack application for booking and managing rental spaces, built with React Native for mobile and React for the admin dashboard. The app allows users to browse, reserve, and rent spaces seamlessly, while the admin dashboard enables real-time management of listings, bookings, and user data. Designed with a focus on scalability, modern UI, and efficient backend integration. ",
    tech: [
      "TypeScript",
      "React Native",
      "Expo Go",
      "Native Wind",
      "NextJS",
      "Tailwind",
      "ShadCN UI",
      "MongoDB",
      "Web Sockets",
    ],
    image: "/images/works/park_space.png",
    width: 234,
    height: 114,
    lowRes: true,
    note: "NOTE: This project is developed for a client and is not open-source.",
  },
  {
    title: "AI Chat Application and Web",
    description:
      "A cross-platform AI-powered chat application built with React Native and React for web support. It enables users to chat with an intelligent assistant powered by OpenAI’s API. The project showcases seamless mobile and web integration, real-time messaging, and a modern, responsive UI. Designed to highlight skills in cross-platform development, API integration, and state management for smooth performance across iOS, Android, and web browsers",
    tech: [
      "TypeScript",
      "React Native",
      "Expo Go",
      "Native Wind",
      "OpenAI API",
      "NextJS",
      "Tailwind",
      "ShadCN UI",
    ],
    image: "/images/works/chat.png",
    width: 364,
    height: 225,
    lowRes: true,
    viewCode: "https://github.com/Jeysieeeee/chat-app",
  },
  {
    title: "Augmented Reality Mobile App",
    description:
      "An augmented reality (AR) mobile app showcasing historical sites in Camarines Norte. Built with ARKit/ARCore and geolocation features, it allows users to explore landmarks through 3D models, animations, and interactive information overlays, providing an immersive educational experience on both iOS and Android.",
    tech: ["C++", "Java", "Unity", "ARCore", "ARKit", "Vuforia"],
    image: "/images/works/ar1.jpg",
    width: 720,
    height: 1053,
    downloadApp:
      "https://drive.google.com/drive/folders/1L7oiG3ONkO4ug1X6k2XnXuzY0amiWsX9",
  },
];

function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const img = images[index];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <Image
        key={img.src}
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className="h-full w-full object-contain animate-in fade-in duration-200"
      />

      <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white">
        {index + 1}/{images.length}
      </span>

      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {index < images.length - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          aria-label="Next image"
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((im, i) => (
          <button
            key={im.src}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-text-light/80 backdrop-blur-sm dark:bg-black/80 animate-in fade-in duration-200"
        onClick={onClose}
      />

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-surface-light shadow-2xl dark:bg-surface-dark md:flex-row animate-in fade-in zoom-in-95 duration-300">
        {/* Media side, like the photo of an Instagram post */}
        <div className="flex max-h-[40vh] items-center justify-center bg-text-light dark:bg-black md:max-h-none md:w-3/5">
          {project.gallery ? (
            <GalleryCarousel images={project.gallery} />
          ) : project.image && project.lowRes ? (
            <div className="relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden md:min-h-full">
              <Image
                src={project.image}
                alt=""
                aria-hidden
                width={project.width ?? 1200}
                height={project.height ?? 900}
                className="absolute inset-0 h-full w-full scale-125 object-cover opacity-50 blur-2xl"
              />
              <Image
                src={project.image}
                alt={project.title}
                width={project.width ?? 1200}
                height={project.height ?? 900}
                className="relative h-auto max-w-[85%] rounded-md shadow-2xl"
              />
            </div>
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={project.width ?? 1200}
              height={project.height ?? 900}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex aspect-4/3 w-full items-center justify-center bg-linear-to-br from-accent-1 to-accent-2/70">
              <span className="px-6 text-center text-2xl font-bold text-white">
                Company Projects
              </span>
            </div>
          )}
        </div>

        {/* Caption side, like an Instagram caption panel */}
        <div className="flex min-h-0 flex-1 flex-col md:w-2/5">
          <div className="flex items-center gap-3 border-b border-border-light px-5 py-4 dark:border-border-dark/40">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-1 text-sm font-bold text-white dark:bg-accent-2 dark:text-primary-text">
              {project.title.charAt(0)}
            </span>
            <p className="text-sm font-bold leading-snug text-text-light dark:text-text-dark">
              {project.title}
            </p>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
            <p className="text-sm leading-relaxed text-text-light dark:text-text-dark">
              {project.description}
            </p>
            {project.note && (
              <p className="mt-3 text-xs font-medium text-red-400">
                {project.note}
              </p>
            )}
            <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-accent-1 dark:text-accent-2">
              {project.tech.map((t) => (
                <span key={t}>#{t.replace(/\s+/g, "")}</span>
              ))}
            </p>
          </div>

          {(project.liveDemo || project.viewCode || project.downloadApp) && (
            <div className="flex items-center gap-3 border-t border-border-light px-5 py-4 dark:border-border-dark/40">
              {project.liveDemo && (
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-accent-1 px-4 text-sm font-medium text-white transition-colors hover:bg-accent-1/90"
                >
                  <Eye className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
              {project.viewCode && (
                <Link
                  href={project.viewCode}
                  target="_blank"
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-accent-1/50 px-4 text-sm font-medium text-accent-1 transition-colors hover:bg-accent-1/10 dark:text-accent-2 dark:hover:bg-accent-2/10"
                >
                  <CodeXml className="h-4 w-4" />
                  View Code
                </Link>
              )}
              {project.downloadApp && (
                <Link
                  href={project.downloadApp}
                  target="_blank"
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-accent-1/50 px-4 text-sm font-medium text-accent-1 transition-colors hover:bg-accent-1/10 dark:text-accent-2 dark:hover:bg-accent-2/10"
                >
                  <Download className="h-4 w-4" />
                  Get the App
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section>
      {/* Pinterest-style masonry: CSS columns keep each pin's natural height */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {projects.map((proj) => (
          <button
            key={proj.title}
            onClick={() => setSelected(proj)}
            className="group mb-5 block w-full cursor-pointer break-inside-avoid text-left"
          >
            <div className="relative overflow-hidden rounded-2xl bg-surface-light shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:bg-surface-dark">
              {proj.image && proj.lowRes ? (
                /* Tiny client screenshot: shown at natural size inside a
                   browser-frame mockup so it never upscales and pixelates */
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt=""
                    aria-hidden
                    width={proj.width ?? 800}
                    height={proj.height ?? 600}
                    className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-xl transition-transform duration-500 group-hover:scale-150"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="max-w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
                      <div className="flex items-center gap-1.5 bg-primary-text px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                      </div>
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        width={proj.width ?? 800}
                        height={proj.height ?? 600}
                        className="h-auto max-w-full"
                      />
                    </div>
                  </div>
                </div>
              ) : proj.image ? (
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={proj.width ?? 800}
                  height={proj.height ?? 600}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex aspect-4/5 w-full items-center justify-center bg-linear-to-br from-accent-1 to-accent-2/70 transition-transform duration-500 group-hover:scale-105">
                  <span className="px-6 text-center text-xl font-bold text-white">
                    Company Projects
                  </span>
                </div>
              )}
              {proj.gallery && (
                <span className="absolute right-3 top-3 rounded-full bg-black/50 p-1.5 text-white">
                  <Images className="h-4 w-4" />
                </span>
              )}
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 p-4 text-sm font-semibold text-white">
                  <Eye className="h-4 w-4" />
                  View details
                </span>
              </div>
            </div>
            <p className="mt-2 px-1 text-sm font-semibold leading-snug text-text-light dark:text-text-dark">
              {proj.title}
            </p>
          </button>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </section>
  );
}
