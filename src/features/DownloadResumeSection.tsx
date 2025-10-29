import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

export  function DownloadResumeSection() {
    
  return (
     <section>
        <Card className="flex flex-col items-center justify-center text-center p-8">
          <p className="text-text-light dark:text-text-dark text-xl font-bold mb-2">
            Want to see the full picture?
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base mb-6 max-w-md">
            Download my resume for a comprehensive look at my skills, projects,
            and professional background.
          </p>

          <a href={'/assets/resume.pdf'} download>
          <Button className="flex items-center gap-2 h-12 px-6 text-base font-bold border border-white">
            Download Resume
          </Button>
        </a>
        </Card>
      </section>
  )
}
