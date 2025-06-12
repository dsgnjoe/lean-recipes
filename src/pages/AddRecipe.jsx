import { useState, useEffect } from 'react'

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    recipeTitle: '',
    recipeImg: [],
    description: '',
    serves: '',
    cookTime: '',
    ingredients: [],
    directions: [],
  })

  const {
    recipeImg,
    recipeTitle,
    description,
    serves,
    cookTime,
    ingredients,
    directions,
  } = formData

  return (
    <div className='font-hostGrotesk'>
      <header>Recipe Information</header>
    </div>
  )
}

export default AddRecipe
