import React from 'react'

export default function Input({label, type, value, placeholder, ...props}) {
  return (
    <div className='p-2'>
      <label htmlFor="input">{label}</label>
      <input 
        type={type}
        value={value}
        placeholder={placeholder}
        className={`w-full mt-2 mb-2 px-2 py-4 rounded-lg border`}
        {...props}
      />
    </div>
  )
}

