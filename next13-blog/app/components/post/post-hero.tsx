import type { Post } from '@/types/collection'

import PostContent from './post-content'

type PostHeroProps = {
  post: Post
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage={true} post={post} />
    </div>
  )
}

export default PostHero
