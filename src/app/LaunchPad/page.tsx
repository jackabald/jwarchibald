export default function LaunchPad() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">LaunchPad</h1>
      <a
        href="https://github.com/jackabald/LaunchPad"
        className="text-sm text-primary hover:underline"
      >
        github.com/jackabald/LaunchPad
      </a>

      <div className="prose prose-lg mt-8">
        <p>
          LaunchPad is a resume builder that tailors an application to a specific job posting, then
          tracks it through to a response. The tailoring pipeline runs a multi-step guided flow over
          the posting and the user&apos;s existing experience, and renders the result through LaTeX so
          the output is a real typeset PDF rather than an HTML approximation.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6">
          <li>Next.js / TypeScript</li>
          <li>Supabase (Postgres, row-level security)</li>
          <li>LaTeX</li>
          <li>Gmail OAuth</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Notes</h2>
        <p>
          A few pieces were more interesting than expected. PDF generation needed automatic font-size
          scaling to keep a tailored resume on one page while staying legible to ATS parsers, which
          rules out most of the layout tricks you&apos;d otherwise reach for. The Kanban tracker
          batches its RPC updates so dragging a card across columns doesn&apos;t fan out into a
          request per reorder. And matching inbound email back to the right application meant storing
          Gmail OAuth tokens encrypted, with row-level security so a token is only ever readable by
          the row&apos;s owner.
        </p>
      </div>
    </div>
  );
}
