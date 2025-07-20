export default function TiDBHack() {
  return (
    <div className="prose prose-lg p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Chat Engine for GitHub Repositories</h1>  

      <p>
        The Semantic Search Engine for Code Repositories is an AI-powered tool designed to help developers find relevant code snippets, 
        functions, or entire libraries based on natural language queries. By leveraging advanced NLP techniques, large language models (LLMs), 
        and TiDB Serverless with Vector Search, this tool allows users to efficiently locate specific code patterns, structures, or algorithms 
        within a codebase.
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
      <ul>
        <li>Python</li>
        <li>Ollama</li>
        <li>Jina AI</li>
        <li>TiDB Serverless</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">About</h2>
      <p>
        During the 2024 TiDB Hackathon, I built a semantic search engine that lets developers search code repositories using natural language. 
        The goal was to make code discovery as intuitive as a Google search—queries like “function that performs quicksort” return precise file paths, 
        line numbers, and code snippets using vector embeddings and large language models (LLMs). The project leverages TiDB Serverless with Vector 
        Search, Ollama for local LLM integration, and GitHub's API to retrieve and index real-world repositories. This tool helps reduce redundancy 
        in development by making code reuse effortless and intelligent.
      </p>
    </div>
  );
}
