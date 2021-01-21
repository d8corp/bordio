import {ApolloClient, InMemoryCache} from '@apollo/client'

export default new ApolloClient({
  uri: 'https://homework.nextbil.com/graphql',
  cache: new InMemoryCache()
})
