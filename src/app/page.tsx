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

      <br />
      <h2 className="text-xl font-semibold mb-4">Projects:</h2>
      <ul className="space-y-2">
      <br />
        <li>
          <Link href="/NuancedNews" className="text-primary hover:underline">
            NuancedNews<span className="text-dark/60"> · All your news in one place.</span>
          </Link>
        </li>
        <br/>
        <li>
          <Link href="/TiDB-hack" className="text-primary hover:underline">
            Chat Engine for Github Repositories<span className="text-dark/60"> · RAG-based model to query codebases and 
            extract insights about project structure, dependencies, and functionality.</span>
          </Link>
        </li>
        <br/>
         <li>
          <Link href="/BionicReader" className="text-primary hover:underline">
            Bionic Reading Browser Extension<span className="text-dark/60"> · Enhances reading speed and focus by bolding key parts 
            of words on any webpage.</span>
          </Link>
        </li>
      </ul>
    </>
  )
}
