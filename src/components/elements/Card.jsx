import React from 'react'

const Card = ({
    as: As = 'div',
    children = '',
    className = '',
    ...props
}) => {
  return (
    <As
      className={`rounded-lg p-8 shadow-md bg-white
        ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}

export default Card
