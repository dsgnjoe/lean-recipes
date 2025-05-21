import Hero from '../components/Hero'
import LatestRecipes from '../components/LatestRecipes'

const Home = () => {
  return (
    <div className='md:mx-20 flex flex-col gap-10'>
      <Hero />
      <LatestRecipes />
    </div>
  )
}

export default Home
