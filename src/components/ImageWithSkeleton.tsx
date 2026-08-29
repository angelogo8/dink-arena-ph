import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

type ImageWithSkeletonProps = {
  src: string
  mobileSrc?: string
  alt: string
  className?: string
}

export function ImageWithSkeleton({ src, mobileSrc, alt, className = '' }: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)
  const reduced = useReducedMotion()
  const isBackdrop = className.includes('hero-media') || className.includes('booking-media')
  const image = <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
  return <div className={className} style={{ position: isBackdrop ? 'absolute' : 'relative', inset: isBackdrop ? 0 : undefined, width: '100%', height: '100%', overflow: 'hidden' }}>
    {mobileSrc ? <picture><source media="(max-width: 720px)" srcSet={mobileSrc} />{image}</picture> : image}
    {!loaded && <motion.div aria-hidden="true" initial={{ opacity: 1 }} animate={reduced ? { opacity: 1 } : { opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(120deg, #101010 0%, #242424 50%, #101010 100%)' }} />}
  </div>
}
