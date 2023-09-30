import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { Layout, Post } from '@/types/collection'

import PostContent from './post-content'

type PostCardProps = {
  layout?: Layout
  post: Post
}

const PostCard = ({ layout = 'horizontal', post }: PostCardProps) => {
  return (
    <Link
      className={`${
        layout === 'horizontal'
          ? 'grid grid-cols-2 items-center gap-10'
          : 'space-y-10'
      }`}
      href={`/post/${post.slug}`}
    >
      {/* {post.title} */}
      <Image
        className="max-h-[300px] w-full rounded-md object-cover object-center"
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      <PostContent post={post} />
    </Link>
  )
}

export default PostCard
