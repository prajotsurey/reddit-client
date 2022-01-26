import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import { useLoginMutation, usePaginatedPostsQuery } from '../generated/graphql'
import Head from 'next/head'
import SideBar from '../components/Sidebar'
import Header from '../components/Header'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding: 70px 10px 15px 10px;
`

const LoadMoreButton = styled.button`
  display:block;
  border: none;
  background: ${props => props.theme.primaryBackground};
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  margin: 0px auto;
  color: ${props => props.theme.primaryTextColor};
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
        <title>
        reddit.com
        </title>
      </Head>
      <Header/>
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
