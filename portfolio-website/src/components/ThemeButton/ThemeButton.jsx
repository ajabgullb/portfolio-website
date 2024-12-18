import React, {useState} from 'react'

function ThemeButton() {
  const [text, setText] = useState("DRK")

  return (
    <div>
      <button
        onClick={toggleTextAndTheme}
        className='bg-white w-16 h-16 mx-7 my-5 px-3 shadow-2xl rounded-full border-[1px] border-black text-lg font-sans font-semibold transition-all hover:bg-[#484a4d] hover:border-none hover:text-white active:bg-white active:border-black active:border-[1px] active:text-black'>
        {text}
      </button>
    </div>
  )
}

export default ThemeButton
