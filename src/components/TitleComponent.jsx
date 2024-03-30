import React from 'react'
import BackButton from './BackButton'

export default function TitleComponent({ title, path }) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <BackButton path={path} />
      <h1 className="text-xl font-semibold text-t-black">{title}</h1>
      <div className="invisible">
        <BackButton />
      </div>
    </div>
  )
}
