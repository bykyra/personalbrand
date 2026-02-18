import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/notes', label: 'Notes' },
  ]

  return (
    <nav className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" alt="Kyra Hermann" className="h-20 w-auto" />
      </Link>

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

    </nav>
  )
}

export default Nav