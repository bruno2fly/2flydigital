'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="2FLY Digital"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A creative studio crafting digital experiences for ambitious brands.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-medium mb-4">Connect</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.social.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <Link href="mailto:bruno@2flydigital.com" className="hover:text-foreground transition-colors">
                  bruno@2flydigital.com
                </Link>
              </p>
              <p>New York City, NY · US & Brazil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 2FLY Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
