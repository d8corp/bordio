import {gql} from '@apollo/client'

// local utils
import api from 'src/api'

// types
type TGender = 'MALE' | 'FEMALE'

// functions
export function registration (name: string, email: string, password: string, country: string, gender: TGender) {
  return api.mutate({
    mutation: gql`
      mutation {
        signup(input: {
          name: "${name}",
          email: "${email}",
          password: "${password}",
          country: "${country}",
          gender: ${gender}
        }) {
          id
        }
      }
    `
  })
}

export default registration
