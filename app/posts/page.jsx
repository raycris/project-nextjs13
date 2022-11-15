/* Los hooks de useState y useEffect no estan funcionando en nextjs13
porque estan en un serviudor de cliente. entonces debemos de buscar otra opcion
para hacer el fetchin de datos
*/

import ListOfposts from '../components/ListOfPosts'
import styles from './page.module.css'

const PostsPage = () => {
  return (
    <section className={styles.section}>
      <ListOfposts />
    </section>
  )
}

export default PostsPage
