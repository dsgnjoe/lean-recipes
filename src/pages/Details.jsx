import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { data } from 'react-router-dom'

const Details = () => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    fetch('/latestRecipe.json')
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data)
        setLoading(false)
      })
  })

  return <div className='bg-white'></div>
}

export default Details
