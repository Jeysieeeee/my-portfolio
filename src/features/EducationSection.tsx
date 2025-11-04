import { Card } from '@/components/Card'
import { GraduationCap } from 'lucide-react'

export  function EducationSection() {
  return (
        <section>
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold px-4 pb-3">
          Education
        </h2>

        <Card className="grid grid-cols-[auto_1fr] gap-x-4 p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
          <div className="flex flex-col items-center gap-1 pt-3">
            <span className="material-symbols-outlined text-cta-light text-2xl">
             <GraduationCap />
            </span>
          </div>
          <div className="flex flex-col pt-3">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
              B.S. in Information Technology
            </p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
              University of Camarines Norte | 2020 - 2023
            </p>
          </div>
        </Card>
      </section>
  )
}
