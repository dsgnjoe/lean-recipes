import HeroImg from '/hero-img.png'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <div>
      <div className='bg-heroGreen text-white font-sans w-full flex items-center justify-between p-10 rounded-xl mx-auto mt-10 '>
        <div className='w-1/2'>
          <h2 className='text-5xl font-bold leading-tight'>
            Welcome to Lean Recipes, Your Ultimate Guide to Healthy Eating
          </h2>

          <p className='text-xs mt-4'>
            From keto to vegan, plaeo to gluten-free, our curated collection of
            recipes ensures you never have to compromise on on taste or
            nutrition.
          </p>
          <button className='bg-white text-heroGreen py-2 px-4 rounded-lg mt-4 font-light'>
            Explore Recipes{' '}
            <IoArrowForwardCircleOutline className='inline-block ml-4' />
          </button>
        </div>
      </div>
      <div className='w-1/2'>
        <img src={HeroImg} alt='hero Image' className='object-cover w-full' />
      </div>
    </div>
  )
}

export default Hero
