import React from 'react'

const NavButton = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

  return (
    <div
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-1 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      <div className='relative items-center justify-center ml-8'>
          {icon}
      </div>
      {text}
    </div>
  )
}

export default NavButton
