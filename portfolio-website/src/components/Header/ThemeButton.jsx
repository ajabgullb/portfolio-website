import React from 'react'

export default function ThemeButton() {

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">

        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
        />
        <div className="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:white"></div>

      </label>
    </>
  )
}

