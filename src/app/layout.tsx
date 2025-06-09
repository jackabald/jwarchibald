import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Jack Archibald',
  description: 'Portfolio • Projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-white text-dark antialiased">
        <div className="max-w-2xl mx-auto px-6 py-12">{children}</div>
      </body>
    </html>
  )
}
