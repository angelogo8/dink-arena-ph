import { ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site'
export function BookNow({ className = '' }: { className?: string }) { return <a className={`book-now ${className}`} href={siteConfig.bookingUrl}>BOOK NOW <ArrowRight aria-hidden="true" size={17} /></a> }
