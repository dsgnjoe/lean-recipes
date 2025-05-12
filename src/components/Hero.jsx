import HeroImg from '/hero-img.png'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <div className='relative bg-heroGreen rounded-xl flex items-center justify-between font-hostGrotesk py-20 mt-36'>
      <div className='flex flex-col justify-center h-full w-1/2 p-10'>
        <h1 className='text-white text-5xl font-bold'>
          Welcome to Lean Recipes, Your Ultimate Guide to Healthy Eating
        </h1>
        <p className='text-white font-thin my-5'>
          From keto to vegan, plaeo to gluten-free, our curated collection of
          recipes ensures you never have to compromise on on taste or nutrition.
        </p>
        <button className='bg-white text-heroGreen py-2 px-4 rounded-lg mt-4 font-light w-1/3'>
          Explore Recipes{' '}
          <IoArrowForwardCircleOutline className='inline-block ml-4' />
        </button>
      </div>
      <img
        src={HeroImg}
        alt='heroImg'
        className='absolute z-10 w-auto object-cover right-0'
      />
    </div>
  )
}

export default Hero
