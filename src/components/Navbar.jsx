import { Link } from 'react-router-dom'
import Logo from '/logo.png'
import { FiSearch } from 'react-icons/fi'
import { GiHamburger } from 'react-icons/gi'

const Navbar = () => {
  const navElement = [
    { name: 'Categories', link: '/categories' },
    { name: 'Recipes', link: '/recipes' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <nav className='flex justify-between items-center bg-transparent text-heroGreen p-3 px-20'>
      <Link to={'/'}>
        <img src={Logo} alt='learn recipe logo' width={50} height={50} />
      </Link>

      <div className='flex gap-4'>
        {navElement.map((item) => (
          <Link to={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className='flex gap-4'>
        <div className='relative'>
          <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
          <input
            type='search'
            placeholder='Search...'
            className='pl-10 pr-4 py-1 border rounded-full'
          />
        </div>
        <button className='bg-heroGreen text-white rounded-lg px-3'>
          Sign up
        </button>
        <button className='bg-white rounded-lg px-3 shadow-md'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
