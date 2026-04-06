import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Movie Website",
    category: "Web Application",
    description:
      "A cinematic streaming platform with personalized recommendations, watchlists, and smooth playback.",
    image: "/moviea.png",
    url: "https://chillflix-two.vercel.app/",
  },
  {
    title: "Fashion E-commerce Website",
    category: "Web Application",
    description:
      "A runway-inspired fashion storefront featuring curated collections, rich product storytelling, and a frictionless checkout.",
    image:
      "/FASHION.png",
    url: "https://e-commerce-rho-lime-11.vercel.app/",
  },

]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Projects That
            <br />
            <span className="text-primary">Speak for Themselves</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Every project is a reflection of our dedication to quality and our
            clients{"'"} unique vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Project preview area */}
              <div className="relative h-72 md:h-80 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
              {/* Details */}
              <div className="bg-background p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
