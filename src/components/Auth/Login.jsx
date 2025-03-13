import React, { useState } from 'react'
import { use } from 'react'

const Login = () => {
 const [email, setEmail] = useState("")
 const [passwrd, setPasswrd] = useState("")

const sumithandler = (e) =>{
  e.preventDefault()
  console.log('form sumited')
  setEmail("")
  setPasswrd("")
}

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-4 border-emerald-600 flex justify-center '>
        <form 
         onSubmit={(e)=>{
          sumithandler(e)
         }}
        className='flex flex-col items-center justify-center h-80 w-100 pt-10' >
            <input 
             value={email}
             onChange={(e)=>{
              setEmail(e.target.value)
             }}
            required className='   border-2 border-emerald-600 rounded-full text-white bg-transparent text-xl outline-none pt-10 '  type="email"  placeholder='Your Email'/> <br />
            <input 
             value={passwrd}
             onChange={(e)=>{
              setPasswrd(e.target.value)
             }}
            required className='   border-2 border-emerald-600 rounded-full text-white bg-transparent text-xl outline-none  py-5' type="password" placeholder=' Enter password' /> <br /> 
            <button  className=' border-2 w-40 rounded-full bg-emerald-500 border-emerald-600 rounded  text-white  text-xl outline-none p-10 bg-emerald'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
