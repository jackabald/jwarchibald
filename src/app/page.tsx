import { Hero } from '@/components/Hero'

const experience = [
  {
    company: 'RxBenefits',
    role: 'Software Engineer',
    period: '2026 — Present',
  },
  {
    company: 'Cottingham & Butler',
    role: 'Software Engineer',
    period: '2025 — 2026',
  },
  {
    company: 'GE HealthCare',
    role: 'Software Engineer Co-Op',
    period: '2024 — 2025',
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
                  {job.company}
                  <span className="font-normal text-dark/60"> · {job.role}</span>
                </h3>
                <p className="text-sm text-dark/60">{job.period}</p>
              </div>
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
