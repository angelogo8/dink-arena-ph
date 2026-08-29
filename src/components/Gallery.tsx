import { motion, useReducedMotion } from 'framer-motion'
import photo01 from '../assets/images/gallery/photo-01.webp'
import photo02 from '../assets/images/gallery/photo-02.webp'
import photo03 from '../assets/images/gallery/photo-03.webp'
import photo04 from '../assets/images/gallery/photo-04.webp'
import { ImageWithSkeleton } from './ImageWithSkeleton'

const photos = [
  { src: photo01, className: 'gallery-large', alt: 'Dink Arena PH gallery photo 1' },
  { src: photo02, className: 'gallery-small-a', alt: 'Dink Arena PH gallery photo 2' },
  { src: photo03, className: 'gallery-small-b', alt: 'Dink Arena PH gallery photo 3' },
  { src: photo04, className: 'gallery-wide', alt: 'Dink Arena PH gallery photo 4' },
]

export function Gallery() {
  const reduced = useReducedMotion()
  const reveal = reduced ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.45 } }
  return <section id="gallery" className="gallery wrap" aria-labelledby="gallery-heading">
    <motion.div {...reveal} className="gallery-heading"><p className="eyebrow">INSIDE DINK ARENA.</p><h2 id="gallery-heading">THE GAME<br />LIVES HERE.</h2></motion.div>
    <div className="gallery-grid">{photos.map(({ src, className, alt }) => <motion.div {...reveal} key={src} className={className}><ImageWithSkeleton src={src} alt={alt} /></motion.div>)}</div>
  </section>
}
