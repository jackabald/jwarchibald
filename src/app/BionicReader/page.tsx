export default function BionicReader() {
  return (
    <div className="prose prose-lg p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bionic Reading Browser Extension</h1>

      <p>
        The Bionic Reader will transform text by bolding the most concise parts to help guide your eyes over text.
         Say goodbye to endless scrolling, eye strain, and the frustration of sifting through cluttered web pages. 
         Bionic Reader is your gateway to a new world of effortless and immersive reading.Brief introduction or summary of the project. 
         Explain what the project is, its purpose, and a one-liner impact.
      </p>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-lg my-6 w-full"
      >
        <source src="/BionicReading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies Used</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">About</h2>
      <p>
        When I first built this project in 2023, Bionic Reading—a technique that emphasizes the beginning of words to guide the eyes—was primarily 
        supported by anecdotal evidence and user testimonials. The core idea was that highlighting the first few letters of a word would let readers 
        "complete" it subconsciously, improving reading speed and focus, especially for neurodivergent readers (e.g., those with ADHD or dyslexia).
          <br />
          <br />
          Since then, the scientific understanding of Bionic Reading has started to mature:
          <br />
          <br />
          Recent studies have explored its impact in more controlled environments, revealing mixed but insightful results. While some research supports 
          improved reading speed and attention, particularly for neurodivergent readers, other findings suggest that comprehension may suffer during longer 
          or denser texts. This has shifted the conversation toward more adaptive approaches—customizing emphasis based on reader preferences, content type, 
          or even using AI to optimize formatting dynamically. The technique is no longer seen as universally effective, but rather as a tool that, when used 
          selectively, can offer genuine benefits for certain users and contexts.
      </p>
    </div>
  );
}
