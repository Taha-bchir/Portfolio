import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
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
          Terms of Service
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
          Welcome to my portfolio website. By accessing or using this website, you agree to be bound by these Terms of
          Service. If you disagree with any part of these terms, please do not use my website.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Intellectual Property</h2>
        <p>
          The content on this website, including text, graphics, logos, images, and software, is my property or the
          property of my licensors and is protected by copyright and other intellectual property laws. You may view and
          download content for personal, non-commercial use only, provided you keep all copyright and other proprietary
          notices intact.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">User Conduct</h2>
        <p>When using my website, you agree not to:</p>
        <ul>
          <li>Use the website in any way that violates any applicable laws or regulations</li>
          <li>Attempt to interfere with the proper functioning of the website</li>
          <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
          <li>Use the website to transmit any harmful code or material</li>
          <li>Attempt to gain unauthorized access to any portion of the website</li>
        </ul>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Contact Form</h2>
        <p>
          When you use the contact form on my website, you agree to provide accurate and complete information. I reserve
          the right to refuse service, terminate accounts, or cancel submissions at my discretion.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">External Links</h2>
        <p>
          My website may contain links to external websites that are not operated by me. I have no control over the
          content and practices of these sites and cannot accept responsibility for their respective privacy policies. I
          encourage you to review the privacy policies of any external websites you visit.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, I shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or
          use of (or inability to access or use) the website.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Changes to These Terms</h2>
        <p>
          I reserve the right to modify these Terms of Service at any time. The date at the top of this page indicates
          when these terms were last revised. Your continued use of the website after any changes indicates your
          acceptance of the new terms.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without
          regard to its conflict of law provisions.
        </p>

        <h2 className="mt-10 border-b pb-2 text-xl font-semibold">Contact Me</h2>
        <p>
          If you have any questions about these Terms of Service, please contact me through the contact form on my
          website.
        </p>
      </div>
    </div>
  )
}
