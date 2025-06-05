import { useState } from 'react'

const Login = ({ switchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

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
        <img src='images/logo.png' alt='sign up logo' width={50} />
        <h1 className='font-hostGrotesk font-bold text-3xl'>Sign In</h1>
      </header>
      <form className='flex flex-col gap-5 py-5'>
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
          Login
        </button>

        <p>
          New to Lean?{' '}
          <button
            type='button'
            onClick={switchToSignUp}
            className='text-footerGreen underline underline-offset-2'
          >
            Create an account
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
