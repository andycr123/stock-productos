import React from 'react'

const inputField = () => {
  return (
    <div className=''>
        <label className='font-semibold text-md'>
            URL : 
        </label>
        <input type='url' className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm ' placeholder='https.//example.com'>
        </input>
    </div>
  )
}

export default inputField;