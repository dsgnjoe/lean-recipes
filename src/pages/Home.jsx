import Hero from '../components/Hero'
import LatestRecipes from '../components/LatestRecipes'
import About from './About'

const Home = () => {
  return (
    <div className=' flex flex-col'>
      <Hero />
      <LatestRecipes />
      <About />
    </div>
  )
}

export default Home
