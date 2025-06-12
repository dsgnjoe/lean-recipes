import { useState, useEffect } from 'react'
import { FiImage } from 'react-icons/fi'

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    description: '',
    serves: '',
    cookTime: '',
    ingredients: [],
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
  return (
    <div className='font-hostGrotesk bg-white p-3 py-10'>
      <header className='font-bold'>Recipe Information</header>

      <div className=''>
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

        {/* ingredient */}
        <div></div>
      </div>
    </div>
  )
}

export default AddRecipe
