import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  // Demo Login Handler
  const demoLogin = () => {
    const demoEmail = "demo@demo.com"
    const demoPassword = "123"

    setEmail(demoEmail)
    setPassword(demoPassword)

    handleLogin(demoEmail, demoPassword)
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>

        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'
        >

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
            type="email"
            placeholder='Enter your email'
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
            type="password"
            placeholder='Enter password'
          />

          <button className='mt-7 text-white hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
            Log in
          </button>

          {/* Demo Login Button */}
          <button
            type="button"
            onClick={demoLogin}
            className='mt-3 text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold text-lg py-2 px-8 w-full rounded-full'
          >
            Try Demo Login
          </button>

        </form>


      </div>
    </div>
  )
}

export default Login