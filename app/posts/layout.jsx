import styles from './layout.module.css'

const PostsLayout = ({ children }) => {
  return (
    <div className={styles.div}>
      <small>Home &bull; Posts</small>
      <h1>Este es el layout de los posts</h1>
      {children}
    </div>
  )
}

export default PostsLayout
