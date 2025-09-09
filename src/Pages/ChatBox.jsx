import { useState } from 'react'
import { dummyMessagesData, dummyUserData } from '../assets/assets'
import { useEffect, useRef } from 'react'
import { ImageIcon, SendHorizonal } from 'lucide-react'

const ChatBox = () => {

  const messages = dummyMessagesData
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)
  const [user, setUser] = useState(dummyUserData)
  const messageEndRef = useRef(null)

  const sendMessage = async () => {

  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behaviour: "smooth" })
  }, [messages])


  return user && (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center gap-2 p-2 md:px-10 xl:pl-42
       bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-300'>
        <img className='size-8 rounded-full' src={user.profile_picture} alt="" />
        <div>
          <p className='font-medium'>{user.full_name}</p>
          <p className='text-sm text-gray-500 -mt-1.5 '>@{user.username}</p>
        </div>
      </div>

      <div className='p-5 md:px-10 h-full overflow-y-scroll '>
        <div className='space-y-4 max-w-4xl mx-auto'>
          {
            messages.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((message, index) => (
              <div className={`flex flex-col ${message.to_user_id !== user._id ? 'items-start' : 'items-end'}`} key={index}>
                <div className={`p-2 text-sm max-w-sm bg-white text-slate-600 rounded-lg shadow
                  ${message.to_user_id !== user._id ? 'rounded-bl-none' : 'rounded-br-none'}`}>
                  {message.message_type === 'image' &&
                    <img src={message.media_url} className='w-full max-w-sm rounded-lg mb-1' alt="" />}
                  <p>{message.text}</p>
                </div>
              </div>
            ))
          }
          <div ref={messageEndRef} />
        </div>
      </div>

      <div className='px-4 '>
        <div className='flex items-center gap-3 pl-5 p-1.5 
         bg-white w-full max-w-xl mx-auto border
          border-gray-300 shadow rounded-full my-5'>
          <input placeholder='Type a message...'
            className='flex-1 outline-none text-slate-800'
            type="text"
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <label htmlFor='image'>
            {
              image ?
                <img className='h-8 rounded' src={URL.createObjectURL(image)} alt="" /> :
                <ImageIcon className='cursor-pointer size-7 text-gray-600' />
            }
            <input id='image' type="file" accept="image/*" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <button onClick={sendMessage} className='bg-gradient-to-r from-blue-500
          to-green-300 hover:from-blue-500 hover:to-pink-700
           active:scale-95 cursor-pointer text-white p-2 rounded-full'>
            <SendHorizonal size={18} className='' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox

