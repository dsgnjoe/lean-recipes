import { useState } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const { name, email } = formData

  const onchange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className=''>
      <header className='flex flex-col items-center gap-3'>
        <img src='/logo.png' alt='sign up logo' width={50} />
        <h1 className='font-hostGrotesk font-bold text-3xl'>Sign up</h1>
      </header>
    </div>
  )
}

export default SignUp
