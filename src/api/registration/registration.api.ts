import client from 'src/api'
import {gql} from '@apollo/client'

type TGender = 'MALE' | 'FEMALE'

export default function registration (name: string, email: string, password: string, country: string, gender: TGender) {
  return client
    .mutate({
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
