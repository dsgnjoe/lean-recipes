import { Link } from 'react-router-dom'
import Logo from '/logo.png'
import { FiSearch } from 'react-icons/fi'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'

const Navbar = () => {
  const navElement = [
    { name: 'Categories', link: '/categories' },
    { name: 'Recipes', link: '/recipes' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className='flex justify-between items-center bg-transparent p-3 '>
      <Link to={'/'}>
        <img src={Logo} alt='lean recipe logo' width={50} height={50} />
      </Link>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col gap-4 py-5 absolute top-16 right-0 w-2/3 text-center bg-heroGreenLight
    md:flex md:flex-row md:static md:w-auto md:bg-transparent md:!py-0`}
      >
        {navElement.map((item) => (
          <Link
            to={item.link}
            key={item.name}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button onClick={toogleMenu} className='md:hidden'>
        {isMenuOpen ? (
          <IoCloseSharp className='bg-heroGreen text-white rounded-md w-8 h-8' />
        ) : (
          <HiMiniBars3BottomRight className='bg-heroGreen text-white rounded-md w-8 h-8' />
        )}
      </button>

      {/* search bar */}
      <div className='md:flex gap-4 hidden'>
        <div className='relative '>
          <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
          <input
            type='search'
            placeholder='Search...'
            className='px-10 py-2 border rounded-full'
          />
        </div>

        {/* sign in/up */}
        <button className='bg-heroGreen text-white rounded-lg px-3'>
          <Link to={'/sign-up'}>Sign up</Link>
        </button>
        <button className='bg-white rounded-lg px-3 shadow-md'>
          <Link>Login</Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
