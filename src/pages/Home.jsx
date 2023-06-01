import React from 'react'
import { AddPostForm } from '../features/posts/AddPostsForm'
import PostsList from '../features/posts/PostsList'

export default function Home() {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  )
}
