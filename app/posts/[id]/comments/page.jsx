import Image from 'next/image'
import React from 'react'
import style from './page.module.css'

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

const Post = async ({ params }) => {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul className={style.ul}>
      {comments.map((comment) => (
        <li key={comment.id} className={style.li}>
          <Image
            src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
            alt={comment.name}
            width={100}
            height={100}
            className={style.Image}
          />
          <div>
            <h2>{comment.name}</h2>
            <p className={style.p}>{comment.body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Post
