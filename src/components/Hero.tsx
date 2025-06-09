import Image from 'next/image'
import { Linkedin, Github } from 'lucide-react'

export function Hero() {
  return (
    <header className="flex items-center space-x-6 mb-12">
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-light">
        <Image src="/avatar.png" alt="Jack Archibald" width={96} height={96} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Jack Archibald</h1>
        <p className="text-sm text-dark/70">Software Engineer</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/jack-archibald/" className="hover:text-primary">
            <Linkedin />
          </a>
          <a href="https://github.com/jackabald" className="hover:text-primary">
            <Github />
          </a>
        </div>
      </div>
    </header>
  )
}
