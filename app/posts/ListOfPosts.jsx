'use client'

import LikeButton from './LikeButton'

/* 'use client' se utiliza parta decirle a next que este es un componente del uso del cliente
no del servidor, si no le ponemos esto, nos daría error */

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

const ListOfposts = async () => {
  const posts = await fetchPost()

  return (
    <>
      {posts.slice(0, 20).map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <LikeButton id={item.id} />
        </article>
      ))}
    </>
  )
}

export default ListOfposts
