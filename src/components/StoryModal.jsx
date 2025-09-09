/* eslint-disable no-unused-vars */
import { ArrowLeft, Sparkle, TextIcon, Upload } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const StoryModal = ({ setShowModel, fetchStories }) => {

  const bgColors = [
    '#ef4444',  // red-500
    '#22c55e',  // green-500
    '#3b82f6',  // blue-500
    '#facc15',  // yellow-400
    '#8b5cf6',  // purple-500
    '#ec4899',  // pink-500
    '#6366f1',  // indigo-500
    '#14b8a6',  // teal-500
    '#f97316',  // orange-500
    '#6b7280'   // gray-500
  ]

  const [mode, setMode] = useState("text")
  const [Background, setBackground] = useState(bgColors[0])
  const [text, setText] = useState("")
  const [media, setMedia] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setMedia(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleCreateStory = async () => {
    // Your create story logic here
  }

  return (
    <div className='fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/80 backdrop-blur text-white'>
      <div className='w-full max-w-md rounded-lg overflow-hidden'>
        <div className='text-center mb-4 flex items-center justify-between'>
          <button onClick={() => setShowModel(false)} className='text-white p-2 cursor-pointer'>
            <ArrowLeft />
          </button>
          <h2 className='text-lg font-semibold'> Create Story </h2>
          <span className='w-10'></span>
        </div>

        <div
          className='flex items-center justify-center relative rounded-lg'
          style={{ height: '24rem', backgroundColor: Background }}
        >
          {mode === 'text' && (
            <textarea
              className='bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none'
              placeholder="what's on your mind."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          )}
          {mode === 'media' && previewUrl && (
            media?.type.startsWith('image') ? (
              <img className='object-contain max-h-full' src={previewUrl} alt='story media' />
            ) : (
              <video className='object-contain max-h-full' src={previewUrl} controls />
            )
          )}
        </div>

        <div className='flex mt-4 gap-3'>
          {bgColors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => setBackground(color)}
              className='w-6 h-6 rounded-full ring ring-white cursor-pointer'
            />
          ))}
        </div>

        <div className='flex gap-2 mt-4'>
          <button onClick={() => {
            setMode("text");
            setMedia(null);
            setPreviewUrl(null);
          }} className={`flex-1 flex items-center justify-center gap-2 p-2 rounded ${mode === 'text' ? "bg-white text-black" : "bg-zinc-800"}`}>
            <TextIcon size={18} />Text
          </button >

          <label htmlFor="mediaUpload" className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'media' ? "bg-white text-black" : "bg-zinc-800"}`}>
            <input
              id="mediaUpload"
              onChange={(e) => { handleMediaUpload(e); setMode('media') }}
              type="file"
              accept='image/*, video/*'
              className='hidden'
            />
            <Upload size={18} /> Photo/Video
          </label>
        </div>

        <button onClick={() => toast.promise(handleCreateStory(), {
          loading: 'Saving...',
          success: <p>Story Added</p>,
          error: e => <p>{e.message}</p>
        })}
          className='flex items-center justify-center gap-2 text-white py-3
         mt-4 w-full rounded bg-gradient-to-r from-blue-500 to-blue-700
          hover:from-blue-500 hover:to-blue-900 active:scale-95 transition cursor-pointer'>
          <Sparkle size={18} /> Create Story
        </button>
      </div>
    </div>
  )
}

export default StoryModal

