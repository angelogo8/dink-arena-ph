import { motion, useReducedMotion } from 'framer-motion'
import { BookNow } from './BookNow'
import bookingImage from '../assets/images/hero/booking.webp'
import { ImageWithSkeleton } from './ImageWithSkeleton'
export function BookingCTA() { const reduced = useReducedMotion(); const reveal = reduced ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: .5 } }; return <section className="booking-cta"><ImageWithSkeleton className="booking-media" src={bookingImage} alt="Pickleball players at Dink Arena PH" /><div className="booking-shade" /><motion.div {...reveal} className="wrap booking-copy"><p className="eyebrow">READY TO PLAY?</p><h2>21 COURTS.<br />YOUR NEXT GAME<br />IS WAITING.</h2><BookNow /></motion.div></section> }
