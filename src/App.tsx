import { Arena } from './components/Arena'
import { BookingCTA } from './components/BookingCTA'
import { CourtsHighlight } from './components/CourtsHighlight'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import './App.css'

export default function App() {
  return <main><Navbar /><Hero /><CourtsHighlight /><Arena /><Gallery /><BookingCTA /><Footer /></main>
}
