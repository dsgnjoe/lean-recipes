const About = () => {
  return (
    <div className='px-3 md:px-20 pb-5 font-hostGrotesk bg-heroGreenLight'>
      <header className='text-center'>
        <h1 className='font-bold text-4xl py-2 md:py-5'>About Lean Recipe</h1>
        <span className='text-lg font-thin md:text-2xl '>
          Finding & Creating Delicious Recipes Has Never Been Easier! Here Is
          How You Can Make The Most Of The Taste Buds.
        </span>
      </header>

      <section className='my-5 flex flex-col items-center justify-center text-center gap-5 md:text-left'>
        <div className='md:flex md:gap-14 md:mt-10'>
          <div>
            <h1 className='font-bold text-2xl md:text-3xl py-2'>
              Search & Discover
            </h1>
            <p className='font-thin  md:text-2xl pb-3'>
              Explore a vast collection of recipes for every meal, diet, and
              cuisine using smart filters to find recipes by ingredients,
              difficulty, or cook time.
            </p>
          </div>
          <img src='/images/img1.png' alt='image' />
        </div>

        <div className='md:flex md:flex-row-reverse md:gap-14 md:mt-10'>
          <div>
            <h1 className='font-bold text-2xl md:text-3xl py-2'>
              View Recipe Details
            </h1>
            <p className='font-thin  md:text-2xl pb-3'>
              Access step-by-step instructions with ingredient lists,
              measurement and estimated cooking time.
            </p>
          </div>
          <img src='/images/img2.png' alt='image' className='md:w-1/2' />
        </div>

        <div className='md:flex md:gap-10 md:mt-10'>
          <div>
            <h1 className='font-bold text-2xl md:text-3xl py-2'>
              Create & Save Recipes
            </h1>
            <p className='font-thin  md:text-2xl pb-3'>
              Create your own recipe and store them in your organized categories
            </p>
          </div>
          <img src='/images/img3.png' alt='image' className='md:w-1/2' />
        </div>
      </section>
    </div>
  )
}

export default About
