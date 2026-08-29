import { ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { BookNow } from './BookNow'
import heroImage from '../assets/images/hero/hero.webp'
import mobileHeroImage from '../assets/images/hero/hero-mobile.webp'
import { ImageWithSkeleton } from './ImageWithSkeleton'
import { siteConfig } from '../config/site'
export function Hero() { const reduced = useReducedMotion(); const enter = (delay = 0) => reduced ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: .55, delay } }; return <section id="top" className="hero"><ImageWithSkeleton className="hero-media" src={heroImage} mobileSrc={mobileHeroImage} alt="Pickleball at Dink Arena PH" /><div className="hero-shade" /><div className="wrap hero-content"><motion.p {...enter()} className="eyebrow">{siteConfig.name}</motion.p><motion.h1 {...enter(.08)}>21 COURTS.<br />ONE ARENA.</motion.h1><motion.div {...enter(.16)} className="hero-actions"><p>Your next pickleball game starts here.</p><BookNow /></motion.div><motion.a {...enter(.26)} href="#arena" className="explore">EXPLORE THE ARENA <ArrowDown aria-hidden="true" size={15} /></motion.a></div><p className="hero-caption">PICKLEBALL, ALL IN.</p></section> }
