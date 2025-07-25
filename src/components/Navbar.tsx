'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  // Only show Home link if not already on homepage
  if (pathname === '/') return null;

  return (
    <div className="max-w-2xl mx-auto px-6 pt-3">
      <nav>
        <Link href="/" className="text-sm text-primary hover:underline font-medium">
          <Home className="inline mr-2" />
        </Link>
      </nav>
    </div>
  );
}

