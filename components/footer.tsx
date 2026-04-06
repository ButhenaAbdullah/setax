import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="#home" className="flex items-center">
            <Image
              src="/setax-logo.png"
              alt="SetaX Logo"
              width={100}
              height={34}
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Home", "Services", "About", "Team", "Portfolio", "Contact"].map(
              (link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
          © 2026 SetaX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
