import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

export  function DownloadResumeSection() {
    
  return (
     <section>
        <Card className="mt-16 flex flex-col items-center justify-center text-center p-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
          <p className="text-text-light dark:text-text-dark text-xl font-bold mb-2">
            Want to see the full picture?
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mb-6 max-w-md">
            Download my resume for a comprehensive look at my skills, projects,
            and professional background.
          </p>

          <a href={'/assets/resume.pdf'} download>
          <Button className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-primary-text text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
            Download Resume
          </Button>
        </a>
        </Card>
      </section>
  )
}
