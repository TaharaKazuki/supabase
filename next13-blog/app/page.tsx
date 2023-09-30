import { DUMMY_POSTS } from '@/DUMMY_DATA'

import PaddingContainer from './components/layout/padding-container'
import PostCard from './components/post/post-card'
import PostList from './components/post/post-list'
import {
  END_INDEX,
  getSubsetOfPosts,
  START_INDEX,
} from './helpers/getSubsetOfPosts'

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={getSubsetOfPosts(DUMMY_POSTS, START_INDEX, END_INDEX)}
        />
      </main>
    </PaddingContainer>
  )
}
