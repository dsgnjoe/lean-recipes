import HeroImg from '/hero-img.png'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <>
      <div className='font-hostGrotesk mx-3 py-10 md:py-28 md:mx-20'>
        {/* header */}
        <div className='md:relative rounded-xl bg-heroGreen flex flex-col p-5 py-14 md:p-10 md:pl-16 md:py-28'>
          <div className='md:w-1/2 md:pr-20'>
            <h1 className='text-white text-3xl md:text-5xl font-bold md:leading-normal '>
              Welcome to Lean Recipes, Your Ultimate Guide to Healthy Eating
            </h1>
            <p className='text-white font-thin my-4'>
              From keto to vegan, plaeo to gluten-free, our curated collection
              of recipes ensures you never have to compromise on on taste or
              nutrition.
            </p>
          </div>
          <button className='bg-white text-heroGreen py-2 px-1 rounded-lg mt-4 font-light w-[165px] md:w-[165px]'>
            Explore Recipes{' '}
            <IoArrowForwardCircleOutline className='inline-block ml-2' />
          </button>
        </div>
      </div>
      {/* hero img */}
      <img
        src={HeroImg}
        alt='heroImg'
        className='md:absolute object-cover md:right-36 md:top-[120px] md:w-[550px] pb-10 md:pb-0'
      />
    </>
  )
}

export default Hero
