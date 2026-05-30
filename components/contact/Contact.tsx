"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[var(--brand-white)] scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-3 md:mb-4">
            Contact
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-[var(--brand-text)] leading-relaxed">
            Looking to collaborate or discuss a project? Feel free to get in touch
            through the contact form or professional platforms below.
          </p>

        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16">

          {/* Left Side — Contact Info */}
          <div className="w-full lg:w-[38%]">

            <div className="border border-[var(--brand-border)] rounded-xl p-5 sm:p-6 md:p-8 bg-[rgba(69,153,254,0.03)] h-full">

              <h3 className="text-lg md:text-xl font-semibold text-[var(--brand-dark)] mb-5 md:mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 md:space-y-6">

                {/* Email */}
                <div>
                  <p className="text-sm font-medium text-[var(--brand-dark)] mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:zafroollah@gmail.com"
                    className="text-sm md:text-base text-[var(--brand-primary)] break-all hover:underline"
                  >
                    zafroollah@gmail.com
                  </a>
                </div>

                {/* LinkedIn */}
                <div>
                  <p className="text-sm font-medium text-[var(--brand-dark)] mb-1">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com/in/zafroollah-carrimbaccus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-[var(--brand-primary)] break-all hover:underline"
                  >
                    linkedin.com/in/zafroollah-carrimbaccus
                  </a>
                </div>

                {/* GitHub */}
                <div>
                  <p className="text-sm font-medium text-[var(--brand-dark)] mb-1">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/Zaf0708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-[var(--brand-primary)] break-all hover:underline"
                  >
                    github.com/Zaf0708
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p className="text-sm font-medium text-[var(--brand-dark)] mb-1">
                    Location
                  </p>

                  <p className="text-sm md:text-base text-[var(--brand-text)]">
                    Tasmania, Australia
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div className="w-full lg:w-[62%]">

            <form
              onSubmit={handleSubmit}
              className="border border-[var(--brand-border)] rounded-xl p-5 sm:p-6 md:p-8 bg-[var(--brand-white)]"
            >

              {/* Name */}
              <div className="mb-4 md:mb-5">

                <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                  Name
                </label>

                <Input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-11 md:h-12 text-sm md:text-base border-[var(--brand-border)] focus-visible:ring-0 focus-visible:border-[var(--brand-primary)]"
                />

              </div>

              {/* Email */}
              <div className="mb-4 md:mb-5">

                <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                  Email
                </label>

                <Input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="h-11 md:h-12 text-sm md:text-base border-[var(--brand-border)] focus-visible:ring-0 focus-visible:border-[var(--brand-primary)]"
                />

              </div>

              {/* Subject */}
              <div className="mb-4 md:mb-5">

                <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                  Subject
                </label>

                <Input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="h-11 md:h-12 text-sm md:text-base border-[var(--brand-border)] focus-visible:ring-0 focus-visible:border-[var(--brand-primary)]"
                />

              </div>

              {/* Message */}
              <div className="mb-5 md:mb-6">

                <label className="block text-sm font-medium text-[var(--brand-dark)] mb-2">
                  Message
                </label>

                <Textarea
                  rows={6}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="min-h-[140px] md:min-h-[160px] text-sm md:text-base border-[var(--brand-border)] resize-none focus-visible:ring-0 focus-visible:border-[var(--brand-primary)]"
                />

              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-5 text-sm ${
                    status.type === "success"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto h-11 md:h-12 px-6 md:px-8 text-sm md:text-base bg-[var(--brand-primary)] hover:bg-[#2F7FE0] text-white disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
