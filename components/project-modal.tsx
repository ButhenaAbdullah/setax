"use client"

import React from "react"

import { useState } from "react"
import { useProjectModal } from "@/components/project-modal-context"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react"

const services = [
  "Custom Website",
  "Mobile Application",
  "Digital Experience / UI/UX Design",
  "Technical Consulting",
]

export function ProjectModal() {
  const { isOpen, closeModal } = useProjectModal()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      description: formData.get("description") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Something went wrong")
      }

      setStatus("success")
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message")
      setStatus("error")
    }
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      closeModal()
      // Reset form state after close animation
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg rounded-2xl border-border bg-background p-0 overflow-hidden">
        {/* Decorative header band */}
        <div className="bg-primary/5 border-b border-border px-6 pt-6 pb-4">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-5 w-5 text-primary" />
              <DialogTitle className="font-serif text-2xl font-bold text-foreground">
                Start Your Project
              </DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              Tell us about your vision and we{"'"}ll bring it to life. Fill out the form below and our team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                Request Sent!
              </h3>
              <p className="mt-2 text-muted-foreground max-w-xs">
                Thank you for reaching out. We{"'"}ll review your project details and get back to you within 24 hours.
              </p>
              <Button
                onClick={() => handleOpenChange(false)}
                className="rounded-full mt-6 px-8"
              >
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="modal-name" className="text-sm font-medium text-foreground">
                  Your Name
                </Label>
                <Input
                  id="modal-name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="mt-1.5 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="modal-email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1.5 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="modal-service" className="text-sm font-medium text-foreground">
                  Service Needed
                </Label>
                <Select name="service" required>
                  <SelectTrigger id="modal-service" className="mt-1.5 rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="modal-description" className="text-sm font-medium text-foreground">
                  Project Description
                </Label>
                <Textarea
                  id="modal-description"
                  name="description"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  rows={4}
                  required
                  className="mt-1.5 rounded-xl resize-none"
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
                    Send Request
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
