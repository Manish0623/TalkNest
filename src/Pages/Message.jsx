import React from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Eye, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Message = () => {

const navigate = useNavigate()

  return (
    <div className='min-h-screen relative bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
        {/** Title */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-slate-900 mb-2'>Messages</h1>
          <p className='text-slate-600'>Talk to your friends and family</p>
        </div>

        {/** Connected Users */}
        <div className='flex flex-col gap-3'>
          {dummyConnectionsData.map((user) => (
            <div
              key={user._id}
              className='max-w-2xl flex items-center gap-x-4 p-6 bg-white shadow rounded-md'
            >
              <img
                src={user.profile_picture}
                className='rounded-full size-12 flex-shrink-0'
              />
              <div className='flex flex-col'>
                <p className='font-semibold text-slate-800'>{user.full_name}</p>
                <p className='text-slate-600 text-sm'>@{user.username}</p>
                <p className='text-slate-500 text-xs'>{user.bio}</p>
              </div>

<div className='flex flex-col gap-2 mt-4'>

  <button onClick={()=> navigate(`/messages/${user._id}`)} className='size-10 flex items-center justify-center text-sm rounded
   bg-slate-200 hover:bg-slate-300 text-slate-700
    active:scale-95 transition cursor-pointer gap-1'>
    <MessageSquare className='w-h h-4 '/>
  </button>

 <button  onClick={()=> navigate(`/messages/${user._id}`)}  className='size-10 flex items-center 
 justify-center text-sm rounded
   bg-slate-200 hover:bg-slate-300 text-slate-700
    active:scale-95 transition cursor-pointer '>
    <Eye className='w-h h-4 '/>
  </button>

  </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Message

