"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: "Feedback",
      description: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Something went wrong")
      }

      setStatus("success")
      form.reset()
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send your message"
      )
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Let{"'"}s Create Something
            <br />
            <span className="text-primary">Beautiful Together</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Ready to bring your vision to life? Reach out and let{"'"}s discuss
            how we can make your digital dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Email Us
                </h3>
                <p className="text-muted-foreground mt-1">support@setax.online</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  Remote Team
                </h3>
                <p className="text-muted-foreground mt-1">
                  We work remotely from around the world, always connected and
                  ready to collaborate.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-accent/50 border border-accent p-6">
              <p className="font-serif text-foreground font-medium italic">
                {"\""}Working with SetaX was an absolute pleasure. Their attention
                to detail and creative vision transformed our brand.{"\""}
              </p>
              <p className="mt-3 text-sm text-primary font-medium">
                - Happy Client
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl bg-background border border-border p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Message Sent!
                </h3>
                  <p className="mt-2 text-muted-foreground">
                  Thank you for your feedback. We{"'"}ll review it and reach out if needed.
                </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMessage}</p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full mt-2"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
