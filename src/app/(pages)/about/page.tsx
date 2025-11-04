
import { DownloadResumeSection, EducationSection, ExperienceSection, SkillsSection } from '@/features'

export default function AboutPage() {
  return (
            <section className="flex-1 py-10 sm:py-16 px-4 sm:px-10 md:px-20 lg:px-40">
                 <div className="max-w-[960px] mx-auto flex flex-col gap-12">
                   <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">My Journey</h1>
              <p className="text-text-light dark:text-text-dark text-base">
                A timeline of my professional experience, education, and skills.
              </p>
            </div>  
            <div className="flex-1 py-10 sm:py-16 space-y-12">
      
            <ExperienceSection/>
            <SkillsSection/>
            <EducationSection/>
            <DownloadResumeSection/>
            </div>
                 </div>
</section>
  )
}
