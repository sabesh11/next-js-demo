import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>welcome{params.username}</h1>
    </div>
  )
}

export default page
