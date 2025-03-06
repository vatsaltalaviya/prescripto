import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
    
      const onSubmitHandler = async(e) => {
        e.preventDefault()
       
      }
  return (
    <form onSubmit={(e)=>onSubmitHandler(e)} className='flex items-center min-h-[80vh]'>
      <div className='flex flex-col items-start gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
        <p className='text-2xl font-semibold'>Create Account</p>
        <p>Please sign up to book appoiment.</p>
        <div className='w-full'>
          <p>Full name</p>
          <input className='border-zinc-300 border rounded w-full p-2 mt-1' type='email' value={username} onChange={(e)=>setUsername(e.target.value)} required />
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input className='border-zinc-300 border rounded w-full p-2 mt-1' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className='w-full'>
          <p>password</p>
          <input className='border-zinc-300 border rounded w-full p-2 mt-1' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-lg'>Create Account</button>
        <p>Already have an Account ? <Link to='/login' className='text-primary cursor-pointer ' >Sign in</Link></p>
      </div>
    </form>
  )
} 

export default Register