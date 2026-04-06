import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Buthena Abdullah",
    role: "CEO & Full Stack Developer",
    image: "/team-member-1.png",
    bio: "With a passion for clean code and elegant design, Buthena leads our technical vision and ensures every project exceeds expectations. She believes technology can be both powerful and beautiful.",
    socials: {
      linkedin: "https://www.linkedin.com/in/buthena-abdullah-28b90b260/",
      twitter: "#",
      github: "https://github.com/ButhenaZw",
    },
  },
  {
    name: "Rana Kreishan",
    role: "Co-Founder & Marketing Manager",
    image: "/team-member-2.png",
bio: "Rana plays a key role in defining SetaX’s identity and connecting it with the right audience. With a strong sense of strategy and communication, she leads marketing efforts that turn ideas into trusted, recognizable brands.",
    socials: {
      linkedin: "https://www.linkedin.com/in/rana-kreishan-009534340/",
      twitter: "#",
      github: "https://github.com/reokook",
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Meet the Women
            <br />
            <span className="text-primary">Behind SetaX</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            A talented duo of passionate women developers, building premium
            digital solutions and empowering the next generation of women in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative rounded-3xl bg-background border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-contain object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Social icons overlay */}
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <a
                    href={member.socials.linkedin}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`} target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  {/* <a
                    href={member.socials.twitter}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}target="_blank"
                  >
                    <Twitter className="h-4 w-4" />
                  </a> */}
                  <a
                    href={member.socials.github}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}target="_blank"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/60 blur-2xl" />
            </div>
          ))}
        </div>

        {/* Empowerment message */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl bg-accent/50 border border-accent px-8 py-6 max-w-2xl">
            <p className="font-serif text-lg text-foreground font-medium italic">
              {"\""}We believe that when women support each other, incredible things happen.
              Every line of code we write is a step toward a more inclusive tech industry.{"\""}
            </p>
            <p className="mt-3 text-sm text-primary font-medium">
              - The SetaX Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
