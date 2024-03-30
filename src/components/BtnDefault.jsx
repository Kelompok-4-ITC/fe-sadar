import React from 'react'

export default function BtnDefault({ text }) {
  return (
    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black" type="submit"
    >
      {text}
    </button>
  )
}
