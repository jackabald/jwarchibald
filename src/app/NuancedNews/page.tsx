export default function NuancedNews() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Nuanced News</h1>
    
      <div className="prose prose-lg">
        <p>
          Large news publications post their .rss files, which are XML files that contain the latest news articles from the publication. 
          The Nuanced News app fetches these .rss files from various sources, parses the XML to extract article information, and categorizes 
          the articles based on their source.
        </p>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg my-6 w-full"
        >
          <source src="/NuancedNews.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6">
          <li>React</li>
          <li>Vite</li>
          <li>Python</li>
          <li>Flask</li>
          <li>Firebase</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">About</h2>
        <p>
          Nuanced News is an open-source web application that aggregates news stories from a wide range of sources across the political spectrum. 
          Instead of categorizing articles directly, it presents stories from publications with known political leanings, allowing readers to compare 
          coverage and develop a more informed and balanced understanding of current events. The goal is to encourage thoughtful reading by 
          highlighting how narratives differ across media outlets.
          <br />
          <br />

          The project features a React frontend, a Flask backend, and Firebase authentication. It fetches and parses RSS feeds in real time, 
          delivering up-to-date headlines and summaries with a clean, responsive interface. Nuanced News is actively maintained and open to 
          contributors. Stars and PRs appreciated!
        </p>
      </div>
    </div>
  );
}
