import Hero from '../components/Hero'
import LatestRecipes from '../components/LatestRecipes'

const Home = () => {
  return (
    <div className=' flex flex-col gap-10'>
      <Hero />
      <LatestRecipes />
    </div>
  )
}

export default Home
