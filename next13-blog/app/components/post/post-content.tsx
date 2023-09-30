import { ArrowRight } from 'lucide-react'
import React from 'react'

import { getReadingTime, getRelativeDate } from '@/lib/helpers'
import type { Post } from '@/types/collection'

type PostContentProps = {
  post: Post
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-neutral-400">
        <div
          className={`font-medium ${
            post.category.title === 'Cities'
              ? 'text-emerald-500'
              : 'text-indigo-500'
          }`}
        >
          {post.category.title}
        </div>
        <div className="h-2 w-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="h-2 w-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post.body)}</div>
        <div className="h-2 w-2 rounded-full bg-neutral-200" />
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      <h2 className="text-3xl font-medium">{post.title}</h2>
      <p className="leading-snug text-neutral-600">{post.description}</p>
      <div className="flex items-center gap-2 pt-3">
        Read More <ArrowRight size="14" />
      </div>
    </div>
  )
}

export default PostContent
