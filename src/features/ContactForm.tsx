"use client";

import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-lg"
        >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col min-w-40 flex-1">
              <label
                htmlFor="fullName"
                className="block text-base font-medium pb-2"
              >
                Full Name
              </label>
             <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            />
            </div>

            <div className="flex flex-col min-w-40 flex-1">
              <label
                htmlFor="emailAddress"
                className="block text-base font-medium pb-2"
              >
                Email Address
              </label>
             <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            />
            </div>

            <div className="flex flex-col min-w-40 flex-1">
              <label
                htmlFor="message"
                className="block text-base font-medium pb-2"
              >
                Your Message
              </label>
               <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi, I'd like to connect regarding..."
              required
              className="form-textarea w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark min-h-36 px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
            />
            </div>

            <Button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 bg-primary text-primary-text text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 active:opacity-80 transition-opacity"
            >
              Send Message
            </Button>
          </form>
       
        </motion.div>
  );
}
