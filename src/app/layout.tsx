import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Jack Archibald',
  description: 'Jack Archibald — software engineer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} font-sans`}>
      <body className="bg-white text-dark antialiased">
        <Navbar />  
        <div className="max-w-2xl mx-auto px-6 py-12">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
