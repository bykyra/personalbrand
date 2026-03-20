import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Notes from './pages/Notes'
import Post from './pages/Post'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

function App() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<Post />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App