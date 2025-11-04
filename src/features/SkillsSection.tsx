import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { SkillIcon } from '@/components/SkillsIcon';
import { cn } from '@/lib';
import { TCommonIcon } from '@/types';

const skills: { name: string; icon: TCommonIcon; level: string }[] = [
  { name: "JavaScript", icon: "js", level: "expert" },
  { name: "TypeScript", icon: "ts", level: "advanced" },
  { name: "React", icon: "react", level: "expert" },
  { name: "Next.js", icon: "nextjs", level: "advanced" },
  { name: "Node.js", icon: "nodejs", level: "intermediate" },
  { name: "Tailwind CSS", icon: "tailwind", level: "expert" },
  { name: "Git", icon: "git", level: "intermediate" },
  { name: "Vercel", icon: "vercel", level: "advanced" },
  { name: "NPM", icon: "npm", level: "expert" },
  { name: "Figma", icon: "figma", level: "expert" },
];
export function SkillsSection() {
  return (
       <section>
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold px-4 pb-3">
          Technical Skills
        </h2>

        <Card className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
          
            {skills.map((skill, i) => (
              <Button
                key={i}
                variant="secondary"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg bg-background-light dark:bg-background-dark"
                )}
              >
                <span className="material-symbols-outlined text-primary text-base">
                 <SkillIcon variant={skill.icon }/> 
                </span>
                <span className="text-sm font-medium">{skill.name}</span>
              </Button>
            ))}
        </Card>
      </section>
  )
}
