import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LatestRecipes = () => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error fetching data', error)
        setLoading(false)
      })
  })

  return (
    <div className='bg-white w-full mt-28 md:px-20 pt-5'>
      <header className='font-bold text-2xl mb-5'>Latest Recipes</header>
    </div>
  )
}

export default LatestRecipes
