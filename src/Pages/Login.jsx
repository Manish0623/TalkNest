import React from 'react'
import {assets} from '../assets/assets'
import { Star } from 'lucide-react'
import {SignIn} from '@clerk/clerk-react'
const Login = () => {
const label={
    label1:"Used by 10+ developers",
    label2:"More than just friends truly connect",
    label3:"connect with global community on TalkNest.",
}

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Background image*/ }
      <img src={assets.bgImage}
      className='absolute top-0 left-0 -z-1 w-full h-full object-cover'
      alt=""/>

{/** left side : brand */}
<div className='flex flex-1 flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
<img src={assets.Preview} className='h-12 object-contain rounded'/>
<div>
    <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
        <img src={assets.group_users} className='h-8 md:h-10'/>
        <div>
            <div className='flex'>
                 {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 md:w-5 text-transparent fill-amber-500"
                  />
                ))}
            </div>
            <p>{label.label1}</p>
        </div>
    </div>
    <h1 className='text-3xl md:text-6xl md:pb-2 font-bold
     bg-gradient-to-r from-blue-950 to-blue-800
     bg-clip-text text-transparent'>{label.label2}</h1>

      <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>{label.label3}</p>
</div>
<span className='md:h-10'></span>
</div>
{/** Right side : login form */}
<div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
<SignIn/>
</div>
    </div>
  )
}

export default Login
