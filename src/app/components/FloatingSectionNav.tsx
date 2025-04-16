'use client'

import Link from 'next/link'

const navItems = [
  { label: 'Process', href: '#process' },
  { label: 'Live Demo', href: '#live-demo' },
  { label: 'What You Get', href: '#deliverables' },
  { label: 'Proof', href: '#proof' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Start', href: '#contact' },
]

export default function FloatingSectionNav() {
  return (
    <nav className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm hidden md:flex gap-4">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="text-gray-700 hover:text-black font-medium transition">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}