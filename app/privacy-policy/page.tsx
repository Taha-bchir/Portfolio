import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl py-16 mx-auto px-4 md:px-6">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-6 px-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-2">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-primary rounded-full mb-6" />
        <p className="text-muted-foreground text-sm">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert leading-relaxed space-y-6">
        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Introduction</h2>
        <p>
          Welcome to my portfolio website. I respect your privacy and am committed to protecting your personal data.
          This Privacy Policy explains how I collect, use, and safeguard your information when you visit my site.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Information I Collect</h2>
        <p>I may collect the following types of information when you visit my website:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Information you provide in the contact form like name and email.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages you visit, time spent on the site, clicks, etc.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser, device, and OS used.
          </li>
        </ul>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">How I Use Your Information</h2>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Improve website experience and content</li>
          <li>Analyze user behavior and performance</li>
          <li>Ensure security and prevent abuse</li>
        </ul>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Third-Party Services</h2>
        <p>
          I use EmailJS to handle contact form submissions. Your data is handled per their privacy policy. I also use
          analytics services to understand site performance and usage.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Data Security</h2>
        <p>
          I use modern security practices to protect your information, but please note that no method of transmission
          online is completely secure.
        </p>
        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Changes to This Privacy Policy</h2>
        <p>
          I may update this policy occasionally. The latest revision date is shown at the top. Changes take effect
          immediately upon publication.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Contact Me</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, feel free to reach out via the contact form.
        </p>
      </div>
    </div>
  )
}
