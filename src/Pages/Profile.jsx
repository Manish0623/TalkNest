import React from 'react'
import {useParams} from 'react-router-dom'
import {dummyUserData , dummyPostsData} from '../assets/assets'
import {useState , useEffect} from 'react'
import Loading from '../components/Loading'
import UserProfileInfo from '../components/UserProfileInfo'
import PostCard from '../components/PostCard'
import moment from 'moment'
import ProfileModel from '../components/ProfileModel'

const Profile = () => {
  const {profileId} = useParams()
  const [user , setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [activeTab , setActiveTab] = useState('posts')
  const [showEdit , setShowEdit] = useState(false)

  const fetchUser = async () => {
    setUser(dummyUserData)
    setPosts(dummyPostsData)
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return user ? (
    <div className='relative h-full overflow-y-scroll bg-gray-50 p-6 '>
      <div className='max-w-3xl mx-auto'> 
        {/** Profile Card */}
        <div className='bg-white rounded-2xl shadow overflow-hidden'>
          {/** Cover Photo */}
          <div className='h-40 md:h-56 bg-gradiant-to-r from-blue-300 via-indigo-400 to-pink-700'>
            {user.cover_photo && <img className='w-full h-full object-cover' src={user.cover_photo}/>} 
          </div> 
          {/** User Info */}
          <UserProfileInfo 
            user={user}
            posts={posts}
            profileId={profileId}
            setShowEdit={setShowEdit}
          />
        </div> 

        {/** Tabs  */}
        <div className='mt-6 '>
          <div className='bg-white rounded-xl shadow p-1 flex max-w-md mx-auto'>
            {["posts","media","likes"].map((tab)=>(
              <button 
                onClick={()=>setActiveTab(tab)} 
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors
                cursor-pointer
                ${activeTab === tab ? "bg-blue-700 text-white" : "text-gray-600 hover:text-gray-800"}`}
                key={tab}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/** posts  */}
          {activeTab === 'posts' && (
            <div className='mt-6 flex flex-col items-center gap-6'>
              {posts.map((post)=> <PostCard key={post.id} post={post}/>)}
            </div>
          )}

          {/** media  */}
          {activeTab === 'media' &&  (
            <div className='flex flex-wrap mt-6 max-w-6xl '>
              {
                posts.filter((post)=>post.image_urls.length > 0).map((post)=>(
                  <>
                    {post.image_urls.map((image , index)=>(
                      <a className='relative group' target='_blank' href={image} key={index}>
                        <img src={image} className='w-64 aspect-video object-cover' alt="" />
                        <p className='absolute bottom-0 right-0 text-xs p-1 px-3 backdrop-blur-xl
                          text-white opacity-0 group-hover:opacity-100 
                          transition duration-400'>Posted {moment(post.createdAt).fromNow()}</p>
                      </a>
                    ))}
                  </>
                ))
              }
            </div>
          )}
        </div>
      </div>
      {/** edit profile Model  */}
      {showEdit && <ProfileModel setShowEdit={setShowEdit}/>}
    </div> 
  ) : (<Loading/>)
}

export default Profile
