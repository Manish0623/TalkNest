import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import { Pencil } from 'lucide-react';

const ProfileModel = () => {

  const user = dummyUserData;

  const [editForm, setEditForm] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    full_name: user.full_name,
  });

  const handleSaveProfile = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50'>
      <div className='max-w-2xl sm:py-6 mx-auto'>
        <div className='bg-white rounded-lg shadow p-6'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Edit Profile</h1>

          <form className='space-y-5' onSubmit={handleSaveProfile}>
            {/** Profile Picture */}
            <div className='flex flex-col items-start gap-3'>
              <label className='block text-sm font-medium text-gray-600 mb-1' htmlFor='profile_picture'>
                Profile Picture
                <input
                  hidden
                  onChange={(e) =>
                    setEditForm({ ...editForm, profile_picture: e.target.files[0] })
                  }
                  type="file"
                  accept="image/*"
                  id="profile_picture"
                  className='w-full p-3 border-gray-200 rounded-lg'
                />
                <div className='group/profile relative'>
                  <img
                    className='group/profile relative'
                    src={
                      editForm.profile_picture
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                    alt=""
                  />
                  <div className='absolute hidden group-hover/profile:flex top-0 left-0 
                   right-0 bottom-0 bg-black/20 rounded-full items-center justify-center'>
                    <Pencil className='w-5 h-5 text-white' />
                  </div>
                </div>
              </label>
            </div>

            {/** Cover Photo */}
            <div className='flex flex-col items-start gap-3 group/cover'>
              <label
                htmlFor='cover_photo'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                CoverPhoto
                <input
                  hidden
                  type="file"
                  accept='image/*'
                  id="cover_photo"
                  className='w-full p-3 border border-gray-300 rounded-lg'
                  onChange={(e) =>
                    setEditForm({ ...editForm, cover_photo: e.target.files[0] })
                  }
                />
                <div className='relative'>
                  <img
                    className='w-80 h-40 rounded-lg bg-gradient-to-r 
                     from-blue-200 via-green-200 to-pink-300 
                     object-cover mt-2'
                    src={
                      editForm.cover_photo
                        ? URL.createObjectURL(editForm.cover_photo)
                        : user.cover_photo
                    }
                    alt=""
                  />
                  <div className='absolute hidden group-hover/cover:flex 
                    top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg 
                    items-center justify-center'>
                    <Pencil className='w-5 h-5 text-white' />
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileModel
