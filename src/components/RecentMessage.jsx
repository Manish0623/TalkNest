import React, { useState, useEffect } from 'react'
import { dummyRecentMessagesData } from '../assets/assets'
import { Link } from 'react-router-dom'
import moment from 'moment'

const RecentMessage = () => {
  const [message, setMessage] = useState([])

  const fetchRecentMessage = async () => {
    setMessage(dummyRecentMessagesData)
  }

  useEffect(() => {
    fetchRecentMessage()
  }, [])

  return (
    <div className='bg-white max-w-xs mt-4 p-4 min-h-20 rounded-md shadow text-xs text-slate-700'>
      <h3 className='font-semibold text-slate-800 mb-4'>Recent Messages</h3>

      <div className='flex flex-col max-h-56 overflow-y-scroll no-scrollbar'>
        {message.map((message, index) => (
          <Link to={`/message/${message.from_user_id._id}`} key={index} className='flex items-start gap-2 py-2 hover:bg-slate-100 rounded-md px-1'>
            <img
              className='w-8 h-8 rounded-full object-cover'
              src={message.from_user_id.profile_picture}
              alt='profile'
            />

            {/* Message Content */}
            <div className='w-full flex flex-col justify-between'>
              {/* Top Row: Name + Time */}
              <div className='flex justify-between'>
                <p className='font-medium'>{message.from_user_id.full_name}</p>
                <p className='text-[10px] text-slate-500'>
                  {moment(message.createAt).fromNow()}
                </p>
              </div>

              {/* Bottom Row: Message + Seen dot */}
              <div className='flex justify-between items-center'>
                <p className='text-gray-500 truncate'>
                  {message.text ? message.text : 'media'}
                </p>

                {!message.seen && (
                  <p className='bg-blue-700 text-white w-4 h-4 flex items-center 
                  justify-center rounded-full text-[10px] ml-2 shrink-0'>
                    1
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentMessage

