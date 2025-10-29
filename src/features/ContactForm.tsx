"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send. Try again later.");
    }
  };

  return (
<div>
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-lg "
        >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-base font-medium pb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="emailAddress"
                className="block text-base font-medium pb-2"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="form-input w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium pb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi, I'd like to connect regarding..."
                required
                className="form-textarea w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark min-h-36 px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-text-light font-bold h-14 rounded-lg hover:opacity-90 active:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
        </motion.div>
     </div>
  );
}
