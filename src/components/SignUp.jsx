import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='bg-white font-hostGrotesk rounded-lg mx-3 p-3 py-5'>
      <header className='flex flex-col items-center gap-3'>
        <img src='/logo.png' alt='sign up logo' width={50} />
        <h1 className='font-hostGrotesk font-bold text-3xl'>Sign up</h1>
      </header>
      <form className='flex flex-col gap-5 py-5'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Full Name:</label>
          <input
            type='text'
            placeholder='John Doe'
            onChange={onChange}
            name='name'
            value={name}
            className='border border-gray-400 rounded-md p-2'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='example@email.com'
            onChange={onChange}
            name='email'
            value={email}
            className='border border-gray-400 rounded-md p-2'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            placeholder='set a password'
            onChange={onChange}
            name='password'
            value={password}
            className='border border-gray-400 rounded-md p-2'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-footerGreen text-white p-2 rounded-lg'
        >
          Get Started
        </button>

        <p>
          Already have an account?{' '}
          <Link
            to={'/login'}
            className='text-footerGreen underline underline-offset-2'
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
