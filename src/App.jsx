/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Login from './Pages/Login'
import ChatBox from './Pages/ChatBox'
import Connection from './Pages/Connection'
import Discover from './Pages/Discover'
import Message from './Pages/Message'
import CreatePost from './Pages/CreatePost'
import Profile from './Pages/Profile'
import Feed from './Pages/Feed'           // <-- Import Feed
import { useUser } from '@clerk/clerk-react'
import Layout from './Pages/Layout'
import { Toaster } from 'react-hot-toast'

function App() {
  // eslint-disable-next-line no-unused-vars
  const { user } = useUser();
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster/>
      <div>
        <Routes>
          <Route path='/' element={!user ? <Login /> : <Layout />}>
            {/* Add Feed as the index route */}
            <Route index element={<Feed />} />  

            <Route path='messages' element={<Message />} />
            <Route path='messages/:userId' element={<ChatBox />} />
            <Route path='connections' element={<Connection />} />
            <Route path='discover' element={<Discover />} />
            <Route path='profile' element={<Profile />} />
            <Route path='profile/:profileId' element={<Profile />} />
            <Route path='create-post' element={<CreatePost />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
