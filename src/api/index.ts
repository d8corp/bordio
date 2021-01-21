import {ApolloClient, InMemoryCache} from '@apollo/client'

// variables
export const api = new ApolloClient({
  uri: 'https://homework.nextbil.com/graphql',
  cache: new InMemoryCache()
})

export default api
