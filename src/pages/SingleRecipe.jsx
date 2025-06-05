import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

const SingleRecipe = () => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState([])

  const params = useParams()

  useEffect(() => {
    fetch('/latestRecipe.json')
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error fetching recipe', error)
        setLoading(false)
      })
  }, [params.LatestRecipe])

  return (
    <div className='bg-white'>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {recipe.map((recipe, index) => (
            <div key={index}>
              {recipe.name === params.name && (
                <div>
                  <img src={recipe.image} alt={recipe.name} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SingleRecipe
