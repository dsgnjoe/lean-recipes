import { FiSearch } from 'react-icons/fi'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Logo from '/logo.png'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-10 bg-footerGreen p-3 pt-5'>
      <div className='flex flex-col  justify-center gap-4'>
        <h3 className='text-4xl font-bold font-outfit text-white'>
          Effortless Recipe Search At Your Fingertips
        </h3>
        <p className='font-hostGrotesk font-thin text-white'>
          Looking for something specific? Our smart search bar makes it easy to
          find the perfect recipe in seconds.
        </p>
        <div className='relative'>
          <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
          <input
            type='search'
            placeholder='Search...'
            className='px-10 py-2 border rounded-lg w-full'
          />
        </div>
        <button className='text-white bg-footerExGreen py-3 px-3 rounded-lg font-light w-1/2'>
          Explore Recipes
          <IoArrowForwardCircleOutline className='inline-block ml-4' />
        </button>

        <Link to={'/'}>
          <img src={Logo} alt='lean recipe logo' width={50} height={50} />
        </Link>

        <div className='flex items-center gap-3'>
          <Link>
            <FaFacebook className='text-white text-2xl' />
          </Link>
          <Link>
            <BsTwitterX className='text-white text-2xl' />
          </Link>
          <Link>
            <FaInstagram className='text-white text-2xl' />
          </Link>
          <Link>
            <FaLinkedin className='text-white text-2xl' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
