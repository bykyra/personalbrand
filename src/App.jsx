import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Notes from './pages/Notes'
import Post from './pages/Post'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<Post />} />
      </Routes>
    </>
  )
}

export default App