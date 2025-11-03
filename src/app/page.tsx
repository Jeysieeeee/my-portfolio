
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
                View My Works
              </Link>
               <div className="flex items-center gap-3">
                {/* GitHub */}
                <Link
                   rel="noopener noreferrer"
                target="_blank"
                  href="https://github.com/Jeysieeeee"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-text-light/80 dark:text-text-dark/80 transition-colors hover:text-text-light dark:hover:text-text-dark"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                   rel="noopener noreferrer"
                target="_blank"
                  href="https://www.linkedin.com/in/jean-carla-guarra-a9bb88225/"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-text-light/80 dark:text-text-dark/80 transition-colors hover:text-text-light dark:hover:text-text-dark"
                >
                  <svg
                    aria-hidden="true"
                    
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>

                {/* Twitter */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-text-light/80 dark:text-text-dark/80 transition-colors hover:text-text-light dark:hover:text-text-dark"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.22 3.766 4.66-.69.188-1.432.233-2.203.084.606 1.885 2.365 3.265 4.453 3.304-1.796 1.407-4.066 2.245-6.516 2.245-.423 0-.84-.025-1.255-.074 2.323 1.496 5.078 2.372 8.033 2.372 9.673 0 14.975-8.246 14.402-15.343.977-.702 1.825-1.573 2.5-2.583z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
  );
}
