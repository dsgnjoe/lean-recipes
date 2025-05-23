import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { latestRecipe } from '../data'

const LatestRecipes = () => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    setRecipes(latestRecipe)
    setLoading(false)
  }, [])

  return (
    <div className='bg-white w-full mt-28 md:px-20 pt-5'>
      <header className='font-bold text-2xl mb-5'>Latest Recipes</header>
    </div>
  )
}

export default LatestRecipes
