import logo from '../assets/images/logo/dink-arena-ph-logo.jpg'
import { siteConfig } from '../config/site'

export function Footer() {
  const year = new Date().getFullYear()
  return <footer>
    <div><a href="#top" style={{ display: 'block', width: '74px', height: '74px' }}><img src={logo} alt={siteConfig.name} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} /></a><p className="footer-tagline">21 COURTS. ONE ARENA.</p></div>
    <nav aria-label="Footer navigation"><a href="#arena">THE ARENA</a><a href="#gallery">GALLERY</a></nav>
    <div className="footer-contact"><p><span>LOCATION</span>To be provided</p><p><span>CONTACT</span>To be provided</p></div>
    <div className="footer-socials"><a href="#">FACEBOOK</a><a href="#">INSTAGRAM</a><a href="#">TIKTOK</a></div>
    <small>© {year} Dink Arena PH. All rights reserved.</small>
  </footer>
}
