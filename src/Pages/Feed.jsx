import { React, useEffect, useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'
import RecentMessage from '../components/RecentMessage'

const Feed = () => {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true) // <-- boolean, not array

  const fetchfeeds = async () => {
    setFeeds(dummyPostsData)
    setLoading(false) // <-- set loading to false after fetching
  }

  useEffect(() => {
    fetchfeeds()
  }, [])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 
     flex items-start justify-center xl:gap-8'>
      {/* stories and post list */}
      <div>
        <StoriesBar/>
        <div className='p-4 space-y-6 '> 
          {feeds.map((post)=>(
            <PostCard key={post._id} post={post}/>
          ))}
           </div>
      </div>
      {/* Right sideBar */}
      <div className='max-xl:hidden sticky top-0'> 
<div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
  <h3 className='text-slate-700 font-semibold text-2xl'>Sponsered</h3>
  <img src={assets.sponsored_img} className='w-75 h-50 rounded-md '/>
  <p className='text-slate-700'>Email Marketing</p>
  <p className='text-slate-500'>Supercharge your marketing with a powerful ,
     easy-to-use platform for better use.</p>
</div>
<h1>{<RecentMessage/>}</h1>
      </div>
    </div>
  ) : <Loading />
}

export default Feed
