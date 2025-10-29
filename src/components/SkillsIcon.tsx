import { cn } from "@/lib";
import { TCommonIcon } from "@/types";

type CommonIconProps = {
  variant: TCommonIcon;
  className?: string;
};

export function SkillIcon({ className, variant }: CommonIconProps) {
    let icon;
    switch (variant) {
        case 'js':  
            icon = <img src="/images/icons/javascript.svg" alt="js" className={cn('w-7 h-7', className)} />;
            break;
        case 'ts':
            icon = <img src="/images/icons/typescript.svg" alt="ts" className={cn('w-7 h-7', className)} />;
            break;
        case 'react':
            icon = <img src="/images/icons/react.svg" alt="react" className={cn('w-7 h-7', className)} />;
            break;
        case 'nextjs': 
            icon = <img src="/images/icons/next.svg" alt="nextjs" className={cn('w-7 h-7', className)} />;    
            break;
        case 'nodejs':
            icon = <img src="/images/icons/nodejs.svg" alt="nodejs" className={cn('w-7 h-7', className)} />;
            break;
        case 'html':
            icon = <img src="/images/icons/html.svg" alt="html" className={cn('w-7 h-7', className)} />;
            break;
        case 'css': 
            icon = <img src="/images/icons/css.svg" alt="css" className={cn('w-7 h-7', className)} />;
            break;
            case 'tailwind':
            icon = <img src="/images/icons/tailwind.svg" alt="tailwind" className={cn('w-7 h-7', className)} />;
            break;
        case 'git':
            icon = <img src="/images/icons/git.svg" alt="git" className={cn('w-7 h-7', className)} />;
            break;
        case 'github':
            icon = <img src="/images/icons/github.svg" alt="github" className={cn('w-7 h-7', className)} />;
            break;
        case 'vercel':
            icon = <img src="/images/icons/vercel.svg" alt="vercel" className={cn('w-5 h-5', className)} />;
            break;
        case 'npm':
            icon = <img src="/images/icons/npm.svg" alt="npm" className={cn('w-7 h-7', className)} />;
            break;
        case 'figma':
            icon = <img src="/images/icons/figma.svg" alt="figma" className={cn('w-5 h-5', className)} />;
            break;
        default:
            icon = <img src="/images/icons/default.svg" alt="default" className={cn('w-7 h-7', className)} />;
    }

    return icon;
}