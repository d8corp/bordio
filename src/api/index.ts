import {ApolloClient, InMemoryCache} from '@apollo/client'

// variables
export const api = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

export default api
