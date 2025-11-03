/* eslint-disable react/no-unescaped-entities */
'use client'
import ContactForm from '@/features/ContactForm'
import { motion } from "framer-motion";
import { FileUser, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
 <section className="flex-1 py-10 sm:py-16 px-4 sm:px-10 md:px-20 lg:px-40">
  <div className="flex flex-col items-center justify-center flex-1 px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-24">
   <div className="flex justify-between items-center w-full"> 
    {/* LEFT SIDE */}
     <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
       <div className="flex flex-col gap-6 text-center lg:text-left">

         <div className="flex flex-col gap-3">
           <h1 className="text-4xl text-left md:text-5xl lg:text-6xl font-black tracking-tight text-text-light dark:text-text-dark">
              Let's Connect
            </h1>
             <p className="text-secondary text-lg text-wrap text-left md:text-xl font-normal ">
              I'm currently available for freelance work, collaborations, or job
              opportunities. Feel free to reach out and let's build something
              amazing together!
            </p>
         </div>

   <div className="flex justify-center lg:justify-start items-center gap-6 pt-4">
    <Github />
             <Linkedin />

            <a href={'/assets/resume.pdf'} download>
               <FileUser />
            </a>
     </div>
       </div>
       
 <ContactForm />
     </div>
      
      </div>
  </div>
  
    </section>
  
   
  )
}
