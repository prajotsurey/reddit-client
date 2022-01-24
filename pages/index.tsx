import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import { useLoginMutation, usePaginatedPostsQuery } from '../generated/graphql'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding-top: 70px;
`
const Home = () => {

  const {data, loading, error} = usePaginatedPostsQuery()

  if(loading) {
    return(
      <Container>
        Loading...
      </Container>
    )
  }

  console.log(data?.paginatedPosts.posts)
  return(
    <>
      <NavBar/>
      <Container>
        <main>
          {
            data?.paginatedPosts.posts.map(post => {
              return(
                <Post key={post.id} post={post}/>
              )
            })
          }
        </main>
      </Container>
    </>
  )
}

export default Home
