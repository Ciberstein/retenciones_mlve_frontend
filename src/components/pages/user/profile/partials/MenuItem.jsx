import { ChevronRight } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ icon = "", title = "", desc = "", url="" }) => {
  return (
    <Link to={url} className="flex items-center justify-between p-6">
      <div className="flex gap-4 items-center">
        <div className="p-4 rounded-full border text-blue-500">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium">{title}</span>
          <span className="text-solid-gray-550">{desc}</span>
        </div>
      </div>
      <ChevronRight />
    </Link>
  )
}

export default MenuItem
