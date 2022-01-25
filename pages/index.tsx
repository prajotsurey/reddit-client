import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import { useLoginMutation, usePaginatedPostsQuery } from '../generated/graphql'
import Head from 'next/head'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding-top: 70px;
  padding-bottom: 15px;
`

const LoadMoreButton = styled.button`
  display:block;
  border: none;
  background: ${props => props.theme.primaryBackground};
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  margin: 0px auto;
`
const Home = () => {

  const {data, loading, fetchMore} = usePaginatedPostsQuery()

  if(loading) {
    return(
      <Container>
        Loading...
      </Container>
    )
  }

  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
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
          { data?.paginatedPosts.hasMore
            ?
            <LoadMoreButton type="button" onClick={() => {
              fetchMore({
                variables:{
                  cursor: data?.paginatedPosts.posts.at(-1).createdAt //ts does not have support for array.prototype.at in es2021
                }
              })
            }}>
                Load more
            </LoadMoreButton>
            : <></>
          }
        </main>
      </Container>
    </>
  )
}

export default Home
