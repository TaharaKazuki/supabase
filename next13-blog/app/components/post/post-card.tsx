import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/types/collection'

type PostCardProps = {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link className="grid grid-cols-2 gap-10" href={`/post/${post.slug}`}>
      {/* {post.title} */}
      <Image alt={post.title} src={post.image} width={600} height={300} />
      <div>{post.title}</div>
    </Link>
  )
}

export default PostCard
