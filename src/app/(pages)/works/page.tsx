import ProjectsPage from '@/features/ProjectsPage'
import React from 'react'

export default function WorksPage() {
  return (
    <section className="flex-1 py-10 sm:py-16 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="max-w-[960px] mx-auto flex flex-col gap-12">
       <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">My Works</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">
                Here's a selection of my projects that showcase my skills and experience. Each project includes a brief description, the technologies used, and links to the live demo and source code.
              </p>
        </div> 
      </div>
      <div className="flex-1 py-10 sm:py-16 space-y-12">
    <ProjectsPage />
      </div>

    </section>

  )
}
