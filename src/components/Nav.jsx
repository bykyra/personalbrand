import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

function Nav() {
  const location = useLocation()
  const { scrollY } = useScroll()
  
  // Text visible at top, logo visible after scroll
  const textOpacity = useTransform(scrollY, [250, 350], [1, 0])
  const logoOpacity = useTransform(scrollY, [250, 350], [0, 1])

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/notes', label: 'Notes' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* Left side - switches between text and logo */}
        <div className="relative h-12 flex items-center min-w-[180px]">
          {/* "Happy you're here" text */}
          <motion.p 
  className="text-xs uppercase tracking-widest text-gray-400 font-medium absolute left-0 whitespace-nowrap"
  style={{ opacity: textOpacity }}
>
            Happy you're here
          </motion.p>
          
          {/* Logo */}
          <motion.img 
            src="/logo.png" 
            alt="Kyra Hermann" 
            className="h-16 w-auto absolute left-0" 
            style={{ opacity: logoOpacity }}
          />
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-gray-900 border-b border-gray-900 pb-0.5'
                  : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Nav