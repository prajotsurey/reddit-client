import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { PaginatedPostsResponse } from '../generated/graphql'
import { setContext } from '@apollo/client/link/context'
import { getToken } from './token'

console.log(process.env.NEXT_PUBLIC_SERVER_URL)
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies:{
      Query: {
        fields: {
          paginatedPosts: {
            keyArgs: false,
            merge(existing: PaginatedPostsResponse | undefined , 
              incoming: PaginatedPostsResponse): PaginatedPostsResponse {
              return {
                ...incoming,
                // eslint-disable-next-line no-unsafe-optional-chaining
                posts: [...(existing?.posts || []), ...incoming?.posts]
              }
            }
          }
        }
      }
    }
  })
})

export default client