export default function TiDBHack() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Semantic Code Search</h1>
      <a
        href="https://github.com/jackabald/TiDB-Hack-NL-repo-search"
        className="text-sm text-primary hover:underline"
      >
        github.com/jackabald/TiDB-Hack-NL-repo-search
      </a>

      <div className="prose prose-lg mt-8">
        <p>
          Built at the 2024 TiDB AI Hackathon. The idea was to make code discovery work like a search
          engine rather than a grep — a query like &ldquo;function that performs quicksort&rdquo;
          returns the file path, line numbers, and surrounding snippet, across a repository the tool
          has never seen before.
        </p>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg my-6 w-full"
        >
          <source src="/TiDBHack.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6">
          <li>Python</li>
          <li>JinaAI (embeddings)</li>
          <li>TiDB Serverless with Vector Search</li>
          <li>Ollama (local LLM runner)</li>
          <li>LlamaIndex (context retrieval)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How it works</h2>
        <p>
          Repositories are pulled through GitHub&apos;s API and chunked, then embedded with JinaAI and
          stored as vector representations in TiDB Vector Store. At query time, LlamaIndex handles
          retrieval against those embeddings and Ollama runs the model locally to turn the retrieved
          context into an answer — so the index lives in TiDB while inference stays on the machine.
        </p>
      </div>
    </div>
  );
}
