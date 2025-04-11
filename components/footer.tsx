import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Taha Bchir. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
