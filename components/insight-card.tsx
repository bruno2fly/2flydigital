'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface InsightCardProps {
  title: string
  category: string
  image: string
  href?: string
}

export function InsightCard({
  title,
  category,
  image,
  href = '#',
}: InsightCardProps) {
  return (
    <Link href={href} className="group block">
      <article>
        {/* Image */}
        <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted mb-5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              {category}
            </p>
            <h3 className="text-lg lg:text-xl font-serif group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </div>
        </div>
      </article>
    </Link>
  )
}
