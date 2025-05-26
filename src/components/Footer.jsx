import { FiSearch } from 'react-icons/fi'

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
      </div>
    </div>
  )
}

export default Footer
