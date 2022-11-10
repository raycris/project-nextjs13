import React from 'react'

const Post = ({ params }) => {
  const { id } = params
  return <h1>Esto es un Post {id}</h1>
}

export default Post
