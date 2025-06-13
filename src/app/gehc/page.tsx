export default function PlaceholderPage() {
  return (
    <div className="prose prose-lg p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Project Title</h1>
      <p className="text-sm text-muted-foreground mb-8">Month YYYY – Month YYYY</p>

      <p>
        Brief introduction or summary of the project. Explain what the project is, its purpose, and a one-liner impact.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies Used</h2>
      <ul>
        <li>Java</li>
        <li>SQL</li>
        <li>Spring Boot</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What I Did</h2>
      <p>
        A paragraph or two describing your responsibilities, challenges you overcame, and what you learned.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>
      <ul>
        <li>Improved backend performance by X%</li>
        <li>Learned to work in a cross-functional team</li>
        <li>Gained experience with real-world data pipelines</li>
      </ul>
    </div>
  );
}
