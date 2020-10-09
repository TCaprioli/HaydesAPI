import { gql } from 'apollo-server-express'

export const typeDefs = gql`
type Query {
  helloWorld: String
  users: [User!]!
}
type User {
  id: ID!
  name: String!
}
type Mutation {
  createUser(name: String!): User!
}
`