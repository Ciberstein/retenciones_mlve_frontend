import React from 'react'

const Card = ({
    as: As = 'div',
    children = '',
    className = '',
    ...props
}) => {
  return (
    <As
      className={`rounded-lg p-4 border border-gray-300
        ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}

export default Card
