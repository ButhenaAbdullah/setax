"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useProjectModal } from "@/components/project-modal-context"

export function HeroSection() {
  const { openModal } = useProjectModal()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-accent-foreground" style={{color:"black"}}>
            Empowering Women in Tech
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
          Crafting Digital
          <br />
          <span className="text-primary">Experiences</span>
          <br />
          with Elegance
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          SetaX is a premium digital solutions company driven by a talented
          all-female remote team. We create fully customized websites, mobile
          apps, and digital experiences that perfectly reflect your brand.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={openModal} size="lg" className="rounded-full px-8 text-base">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
          >
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "2+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
{ value: "Focused", label: "Quality Over Quantity" },

            { value: "100%", label: "Female Team" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
