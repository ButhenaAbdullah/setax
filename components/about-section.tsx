import { Heart, Target, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Every project is fueled by our genuine love for creating beautiful digital experiences.",
  },
  {
    icon: Target,
    title: "Excellence First",
    description: "We hold ourselves to the highest standards, delivering premium quality in every detail.",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "We create real opportunities for skilled women developers in the tech industry.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends, using cutting-edge technologies to build future-proof solutions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              About SetaX
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
              Built by Women,
              <br />
              <span className="text-primary">Powered by Purpose</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              SetaX was founded with a bold vision: to prove that an all-female
              remote team can deliver world-class digital solutions while
              creating meaningful opportunities for women in tech.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don{"'"}t use templates. Every project is a unique creation,
              crafted from scratch to perfectly reflect our clients{"'"} brand
              identity. Our team combines creativity, technical expertise, and
              a deep commitment to quality that sets us apart.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beyond delivering exceptional digital products, we are dedicated
              to nurturing talent. Through direct technical supervision, we help
              junior developers grow into confident professionals, building a
              stronger, more inclusive tech community.
            </p>
          </div>

          {/* Right - values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
