import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/images/logo/dink-arena-ph-logo.jpg'
import { siteConfig } from '../config/site'
import { BookNow } from './BookNow'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const close = () => setOpen(false)
  return <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
    <a href="#top" aria-label={siteConfig.name} style={{ display: 'block', flex: '0 0 auto', width: 'clamp(47px, 4vw, 54px)', height: 'clamp(47px, 4vw, 54px)' }}><img src={logo} alt={siteConfig.name} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} /></a>
    <nav className={open ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Main navigation">
      <a href="#arena" onClick={close}>THE ARENA</a><a href="#gallery" onClick={close}>GALLERY</a><BookNow className="nav-book" />
    </nav>
    <BookNow className="desktop-book" />
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X aria-hidden="true" /> : <><span>MENU</span><Menu aria-hidden="true" size={19} /></>}</button>
  </header>
}
