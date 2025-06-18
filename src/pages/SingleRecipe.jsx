import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import Vegies from '../components/Vegies'
import { IoBookmarkOutline } from 'react-icons/io5'
import React from 'react'

const SingleRecipe = () => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState([null])

  const { name } = useParams()

  useEffect(() => {
    fetch('/LatestRecipe.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const foundRecipe = data.find((item) => item.name === name)
        setRecipe(foundRecipe)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error Fetching Recipe', error)
        setLoading(false)
      })
  }, [name])

  return (
    <div className='bg-white font-hostGrotesk'>
      {loading ? (
        <Spinner />
      ) : recipe ? (
        <>
          <div className='p-3 md:flex md:gap-10 md:px-20 md:py-10'>
            {/* Recipe image */}
            <img
              src={recipe.mainImg}
              alt={recipe.name}
              className='rounded-2xl md:w-[45%]'
            />

            <div className='md:px-10'>
              {/* Recipe name  */}
              <h2 className='text-center font-semibold text-4xl py-5'>
                {recipe.name}
              </h2>

              {/* Recipe owner */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 px-2'>
                  <img
                    src={recipe.chefImg}
                    alt={recipe.chef}
                    className='w-10 rounded-full'
                  />
                  <div>
                    <h4>{recipe.chef}</h4>
                    <h5 className='text-sm font-light text-gray-400'>
                      {recipe.date}
                    </h5>
                  </div>
                </div>

                {/* vegetarian badge */}
                <span className='flex items-center gap-3'>
                  <Vegies />
                  <IoBookmarkOutline className='font-bold text-xl' />
                </span>
              </div>

              {/* Prep, cook an total Time */}
              <div className='grid grid-cols-2 py-4 justify-items-center text-center gap-5 md:flex'>
                {['prepTime', 'cookTime', 'serves', 'totalMinutes'].map(
                  (key) =>
                    recipe[key] && (
                      <React.Fragment key={key}>
                        <span className='bg-gray-200 p-3 rounded-md  w-2/3'>
                          {key
                            .replace(/([A-Z])/g, ' $1') // add space before capital letters
                            .replace(/^./, (str) => str.toUpperCase())}
                          {/* capitalize first letter */}
                          <h4 className='bg-white rounded p-1 mx-4  text-sm'>
                            {recipe[key]} mins
                          </h4>
                        </span>
                      </React.Fragment>
                    )
                )}
              </div>

              {/* About Recipe */}
              <div className='p-2'>
                <h1 className='text-2xl font-semibold py-3'>
                  {' '}
                  About The Recipe
                </h1>
                <p className='font-thin'>{recipe.about}</p>
              </div>
            </div>
          </div>

          {/* Ingredient and Method */}
          <div className='bg-heroGreenLight p-3 py-5 md:flex md:justify-between md:px-20 md:gap-16'>
            {/* ingredient */}
            <div className='md:w-full'>
              <h3 className='font-league text-3xl'>Ingredients</h3>
              <div className='flex flex-col p-2 bg-white my-5'>
                {recipe.ingredients?.map((item, index) => (
                  <ul
                    key={index}
                    className={`py-2 px-3 text-gray-500 ${
                      index !== recipe.ingredients.length - 1
                        ? 'border-b border-gray-300'
                        : ''
                    }`}
                  >
                    {item}
                  </ul>
                ))}
              </div>
            </div>

            {/* methods */}
            <div className='md:w-full'>
              <h3 className='font-league text-3xl'>Methods</h3>
              <ol className='flex flex-col list-decimal my-5 px-5'>
                {recipe.method?.map((item, index) => (
                  <li key={index} className='py-2 '>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </>
      ) : (
        <h1>No Recipe Found</h1>
      )}
    </div>
  )
}

export default SingleRecipe
