// import Image from 'next/image'
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import "./page.module.css";

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const Post = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const comments = await fetchComments(id);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {/* <Image
            src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
            alt={comment.name}
            width={500}
            height={500}
          /> */}
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              CT
            </Avatar.Fallback>
          </Avatar.Root>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Post;
