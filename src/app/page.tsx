import Link from 'next/link'
import { Hero } from '@/components/Hero'

export default function Page() {
  return (
    <>
      <Hero />

      <section className="prose prose-lg mb-12">
        <p className='mb-6'>Hi there!</p>
        <p className='mb-6'>
          I&apos;m Jack Archibald.  I&apos;m currently a software engineering intern at GE HealthCare, where I work with 
          backend microservices for medical resonance imaging (MRI) platforms using Spring Boot, Gradle, and Jenkins.
        </p>
        <p>
          Previously, I was a Field Technician at UW-Madison&apos;s Division of IT, where I delivered campus-wide tech support, 
          imaged and secured workstations, and resolved technical issues through remote system access and diagnostics.
        </p>
      </section>

      <h2 className="text-xl font-semibold mb-4">More About My Experience:</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/gehc" className="text-primary hover:underline">
            Magnetic Resonance Imaging (MRI)<span className="text-dark/60"> — (October 2024 - August 2025)</span>
          </Link>
        </li>
        <li>
          <Link href="/doit" className="text-primary hover:underline">
            DoIT Technologist<span className="text-dark/60"> — (September 2022 - September 2024)</span>
          </Link>
        </li>
      </ul>
    </>
  )
}
