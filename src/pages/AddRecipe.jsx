import { useState, useEffect } from 'react'
import { FiImage } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    description: '',
    serves: '',
    cookTime: '',
    ingredients: ['', '', ''],
    method: [],
  })

  const { image, name, description, serves, cookTime, ingredients, method } =
    formData

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onIngredientChange = (index, value) => {
    const updated = [...formData.ingredients]
    updated[index] = value
    setFormData((prevState) => ({
      ...prevState,
      ingredients: updated,
    }))
  }

  const addIngredient = () => {
    setFormData((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, ''],
    }))
  }

  const removeIngredient = (index) => {
    const updated = [...formData.ingredients]
    updated.splice(index, 1)
    setFormData((prevState) => ({ ...prevState, ingredients: updated }))
  }

  return (
    <div className='font-hostGrotesk bg-white p-3 py-10'>
      <header className='font-bold text-2xl'>Recipe Information</header>

      <form className='flex flex-col gap-5'>
        <div className='bg-white shadow-md p-2 rounded-lg'>
          {/* upload image */}
          <div>
            <input
              type='file'
              accept='image/*'
              id='uploadImg'
              onChange={onChange}
              className='hidden'
            />
            <label
              htmlFor='uploadImg'
              className='cursor-pointer bg-gray-200 p-4 w-full h-72 my-3 rounded-lg block text-center md:hover:bg-gray-300 border-2 border-gray-300'
            >
              {image ? (
                image.name
              ) : (
                <p>
                  <FiImage />
                  Click to upload an image
                </p>
              )}
            </label>
            <p className='text-gray-400 font-thin text-sm'>
              Use JPG or PNG. Must be a least 960 x 960. Max file size: 30MB
            </p>
          </div>

          {/* recipe details */}
          <div className='flex flex-col gap-5 py-4'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='text-2xl'>
                Recipe Title
              </label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                className='border-2 border-gray-300 rounded-md p-2 mt-1'
                placeholder='Give your recipe a title'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='description' className='text-2xl'>
                Description
              </label>
              <input
                type='text'
                name='description'
                value={description}
                onChange={onChange}
                className='border-2 border-gray-300 rounded-md p-2 mt-1'
                placeholder='Write about your recipe'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='description' className='text-2xl'>
                Serves
              </label>
              <input
                type='number'
                name='serves'
                value={serves}
                onChange={onChange}
                className='border-2 border-gray-300 rounded-md p-2 mt-1'
                placeholder='Feeds up to?'
                required
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='cookTime' className='text-2xl'>
                Cook Time
              </label>
              <div className='flex gap-3 items-center'>
                <input
                  type='number'
                  name='cookTime'
                  value={cookTime}
                  onChange={onChange}
                  className='border-2 border-gray-300 rounded-md p-2 mt-1 w-12'
                  required
                />
                <select
                  name='cookTime'
                  value={cookTime}
                  onChange={onChange}
                  className='border-2 border-gray-300 text-gray-400 rounded-md h-[43px] w-full '
                >
                  <option value={cookTime}>Minutes</option>
                  <option value={cookTime}>Hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className='bg-white shadow-md p-2 rounded-lg'>
          <div className='flex flex-col py-4'>
            <label htmlFor='indredients' className='text-2xl'>
              Ingredients
            </label>
            <div className='flex flex-col gap-2'>
              {formData.ingredients.map((item, index) => (
                <span key={index} className='flex items-center gap-2'>
                  <input
                    type='text'
                    name='ingredients'
                    value={item}
                    onChange={(e) => onIngredientChange(index, e.target.value)}
                    className='border-2 border-gray-300 w-full rounded-md p-2 mt-1'
                    placeholder='Add an ingredient'
                    required
                  />
                  <button
                    type='button'
                    className='text-xl text-red-500'
                    onClick={() => removeIngredient(index)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </span>
              ))}

              <button
                type='button'
                onClick={addIngredient}
                className=' p-2 border-2 w-1/3 rounded-lg mt-2'
              >
                Add Ingredient
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddRecipe
