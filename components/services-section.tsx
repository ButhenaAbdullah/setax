import { Globe, Smartphone, Palette, MessageCircle } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description:
      "Beautifully crafted, fully responsive websites tailored to your brand identity. No templates, only unique designs built from scratch.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences on every device, from concept to App Store.",
  },
  {
    icon: Palette,
    title: "Digital Experiences",
    description:
      "Immersive digital experiences including UI/UX design, branding, and interactive elements that captivate your audience.",
  },
  {
    icon: MessageCircle,
    title: "Technical Consulting",
    description:
      "Expert guidance on technology stack selection, architecture planning, and digital strategy to elevate your business.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Services Designed for
            <br />
            <span className="text-primary">Your Success</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            We offer a full suite of digital solutions, each crafted with
            precision, creativity, and a deep understanding of your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-background p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
