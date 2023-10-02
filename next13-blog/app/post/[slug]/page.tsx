import { notFound } from 'next/navigation'

import PaddingContainer from '@/app/components/layout/padding-container'
import { DUMMY_POSTS } from '@/DUMMY_DATA'

import PostHero from '../../components/post/post-hero'

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

type PostPageProps = {
  params: {
    slug: string
  }
}

const Page = ({ params }: PostPageProps) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <PaddingContainer>
      <PostHero post={post} />
      {post?.title}
    </PaddingContainer>
  )
}

export default Page
