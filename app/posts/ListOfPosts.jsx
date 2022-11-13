import Link from 'next/link'
import LikeButton from './LikeButton'

/* 'use client' se utiliza parta decirle a next que este es un componente del uso del cliente
no del servidor, si no le ponemos esto, nos daría error.

utilizaqndo {
  next: {
    revalidate: tiempo que quieras
  }
} es para si nuestros datos no son estaticos, cadda x tiempo nos revalide la información que nos
llega por la API

*/

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

const ListOfposts = async () => {
  const posts = await fetchPost()

  return (
    <>
      {posts.slice(0, 20).map((item) => (
        <article key={item.id}>
          <Link href='/posts/[id]' as={`/posts/${item.id}`}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <LikeButton id={item.id} />
          </Link>
        </article>
      ))}
    </>
  )
}

export default ListOfposts
