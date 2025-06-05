import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import Vegies from '../components/Vegies'
import { IoBookmarkOutline } from 'react-icons/io5'
import React from 'react'

const SingleRecipe = () => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState([])

  const { name } = useParams()

  useEffect(() => {
    fetch('/latestRecipe.json')
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.name === name)
        setRecipe(foundRecipe)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error fetching recipe', error)
        setLoading(false)
      })
  }, [name])

  return (
    <div className='bg-white font-hostGrotesk'>
      {loading ? (
        <Spinner />
      ) : recipe ? (
        <>
          <div className='p-3'>
            {/* Recipe name and image */}
            <img src={recipe.mainImg} alt={recipe.name} />
            <h2 className='text-center font-semibold text-4xl py-5'>
              {recipe.name}
            </h2>

            {/* Recipe owner */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3 px-2'>
                <img src={recipe.chefImg} alt={recipe.chef} className='w-10' />
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
            <div className='grid grid-cols-2 py-4 justify-items-center text-center gap-5'>
              {['prepTime', 'cookTime', 'serveTime', 'totalMinutes'].map(
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
              <h1 className='text-2xl font-semibold py-3'> About The Recipe</h1>
              <p className='font-thin'>{recipe.about}</p>
            </div>
          </div>

          {/* Ingredient and Method */}
          <div className='bg-heroGreenLight p-3'>
            {/* ingredient */}
            <div>
              <h3 className='font-league text-3xl'>Ingredients</h3>
              <div className='flex flex-col p-2 bg-white gap-3 underline underline-offset-8'>
                {recipe.ingredient.map((item, index) => (
                  <ul key={index}>{item}</ul>
                ))}
              </div>
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
