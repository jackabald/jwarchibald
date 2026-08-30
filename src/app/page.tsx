import { Hero } from '@/components/Hero'

const experience = [
  {
    company: 'RxBenefits',
    website: 'https://www.rxbenefits.com/',
    role: 'Software Engineer',
    period: '2026 — Present',
    description: 'High-throughput pharmacy claims optimization',
  },
  {
    company: 'Cottingham & Butler',
    website: 'https://www.cottinghambutler.com/',
    role: 'Software Engineer',
    period: '2025 — 2026',
    description: 'Custom-trained PyTorch document intelligence',
  },
  {
    company: 'GE HealthCare',
    website: 'https://www.gehealthcare.com/',
    role: 'Software Engineer Co-Op',
    period: '2024 — 2025',
    description: 'Magnetic resonance imaging platform engineering',
  },
]

export default function Page() {
  return (
    <>
      <Hero />

      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-6">Experience</h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  <a href={job.website} className="hover:underline">
                    {job.company}
                  </a>
                  <span className="font-normal text-dark/60"> · {job.role}</span>
                </h3>
                <p className="text-sm text-dark/60">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-dark/70">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Education</h2>
        <p className="text-dark/80">
          B.S. Computer Science · University of Wisconsin&ndash;Madison
        </p>
      </section>
    </>
  )
}
