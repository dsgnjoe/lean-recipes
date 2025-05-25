import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { latestRecipe } from '../data'
import Spinner from './Spinner'

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

      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {recipes.map((recipes, index) => (
            <div key={index} className=''></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LatestRecipes
