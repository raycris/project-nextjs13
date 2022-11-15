import Link from 'next/link'
import styles from './layout.module.css'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

const Post = async ({ children, params }) => {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

export default Post
