import {gql} from '@apollo/client'

// local utils
import api from 'src/api'

// types
export type TGender = 'MALE' | 'FEMALE'

export interface RegistrationApi {
  name: string
  email: string
  password: string
  country: string
  gender: TGender
}

// functions
export function registration ({name, email, password, country, gender}: RegistrationApi) {
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
