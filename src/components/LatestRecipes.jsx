import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { latestRecipe } from '../data'
import Spinner from './Spinner'
import { GoClock } from 'react-icons/go'
import { IoBookmarkOutline } from 'react-icons/io5'

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
            <div
              key={index}
              className='bg-gray-100 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 '
              onClick={() => navigate(`/recipe/${recipes.id}`)}
            >
              {/* recipe image */}
              <img
                src={recipes.image}
                alt={recipes.title}
                className='w-full h-40 object-cover rounded-t-lg'
              />

              {/* Recipe data */}
              <div className='p-4'>
                <h2 className='text-xl font-semibold mt-3'>{recipes.name}</h2>
                <p className='text-gray-600 mt-1'>By {recipes.chef}</p>

                <div className='flex justify-between items-center'>
                  <span className='text-gray-500 text-sm'>
                    <GoClock className='inline-block' /> {recipes.minutes}{' '}
                    minutes
                  </span>
                  <span>
                    <IoBookmarkOutline />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LatestRecipes
