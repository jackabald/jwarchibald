import Link from 'next/link'
import { Hero } from '@/components/Hero'

export default function Page() {
  return (
    <>
      <Hero />

      <section className="prose prose-lg mb-12">
        <p>Hi there!</p>
        <p>
          I&apos;m Jack Archibald.  I&apos;m currently a software engineering intern at GE HealthCare, where I work with 
          backend microservices for medical resonance imaging (MRI) platforms using Spring Boot, Gradle, and Jenkins.
        </p>
        <p>
          Previously, I was a Field Technician at UW-Madison&apos;s Division of IT, where I delivered campus-wide tech support, 
          imaged and secured workstations, and resolved technical issues through remote system access and diagnostics.
        </p>
      </section>

      <h2 className="text-xl font-semibold mb-4">Here are some things I&apos;ve done:</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="text-primary hover:underline">
            Placeholder<span className="text-dark/60"> — May 17, 2024</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="text-primary hover:underline">
            Placeholder<span className="text-dark/60"> — May 31, 2023</span>
          </Link>
        </li>
      </ul>
    </>
  )
}
