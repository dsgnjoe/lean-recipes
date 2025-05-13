import { Link } from 'react-router-dom'
import Logo from '/logo.png'
import { FiSearch } from 'react-icons/fi'
import { GiHamburger } from 'react-icons/gi'
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
    <nav className='flex justify-between items-center bg-transparent text-heroGreen p-3 px-20'>
      <Link to={'/'}>
        <img src={Logo} alt='learn recipe logo' width={50} height={50} />
      </Link>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute flex-col gap-6 top-20 w-[270px] h-[300px] p-3 items-center md:static md:flex md:flex-row  md:w-auto shadow-lg right-1 md:shadow-none md:h-0 md:gap-8 bg-heroGreenlight md:bg-transparent `}
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

      <div className='md:flex gap-4 '>
        <div className='relative hidden md:block'>
          <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
          <input
            type='search'
            placeholder='Search...'
            className='px-10 py-2 border rounded-full'
          />
        </div>

        <button className='bg-heroGreen text-white rounded-lg px-3'>
          <Link to={'/sign-up'}>Sign up</Link>
        </button>
        <button className='bg-white rounded-lg px-3 shadow-md'>
          <Link>Login</Link>
        </button>
        <div>
          <button onClick={toogleMenu} className='md:hidden'>
            {isMenuOpen ? (
              <IoCloseSharp className='bg-heroGreen text-white rounded-md w-10 h-8' />
            ) : (
              <GiHamburger className='bg-heroGreen text-white rounded-md w-10 h-8' />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
