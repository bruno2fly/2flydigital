'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface WorkCardProps {
  title: string
  description: string
  category: string
  image: string
  href?: string
  featured?: boolean
}

export function WorkCard({
  title,
  description,
  category,
  image,
  href = '#',
  featured = false,
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className={`group block ${featured ? 'col-span-full lg:col-span-2' : ''}`}
    >
      <article className="h-full">
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-lg bg-muted ${
            featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              {category}
            </p>
            <h3
              className={`font-serif ${
                featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
              }`}
            >
              {title}
            </h3>
            <p className="mt-2 text-muted-foreground text-sm lg:text-base max-w-md">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0 mt-1">
            <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
              <ArrowUpRight className="h-4 w-4 group-hover:text-primary-foreground transition-colors" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
