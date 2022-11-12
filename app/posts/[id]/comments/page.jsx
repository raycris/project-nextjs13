import Image from 'next/image'

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

const Post = async ({ params }) => {
  const { id } = params
  console.log(id)
  const comments = await fetchComments(id)
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
            alt={comment.name}
            width={500}
            height={500}
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Post
