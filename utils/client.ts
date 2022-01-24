import { ApolloClient, InMemoryCache } from '@apollo/client'
import { PaginatedPostsResponse } from '../generated/graphql'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
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