import React from 'react'

export default function Button({ children, type="submit", bgColor="bg-black", textColor="text-white", ...props }) {
  return (
    <div className='p-2'>
      <button type={type} className={`w-full mt-2 mb-2 px-2 py-4 rounded-lg hover:bg-gray-900 ${bgColor} ${textColor} `} {...props}>
        {children}
      </button>
    </div>
  )
}

