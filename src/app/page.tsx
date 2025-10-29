import { Button } from "@/components/Button";
import { Header } from "@/features";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex max-w-3xl flex-col items-start gap-6 text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">Jean Carla Guarra</h1>
              <h2 className="text-xl font-medium text-accent-light dark:text-accent-dark sm:text-2xl">
               Frontend Engineer
              </h2>
              <p className="mt-2 text-base max-w-xl text-text-light/80 dark:text-text-dark/80 sm:text-lg">
                Building intuitive and performant web experiences from concept to deployment.
              </p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/works" className="flex items-center text-center h-12 min-w-[84px] rounded-lg bg-cta-light text-text-light border-white border dark:bg-cta-dark dark:text-text-dark px-6 text-base font-bold tracking-wide hover:scale-105 transition-transform">
                View My Work
              </Link>
            </div>
          </div>
        </div>
  );
}
