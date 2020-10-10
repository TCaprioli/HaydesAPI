import { gql } from 'apollo-server-express'

export const typeDefs = gql`
type Query {
  helloWorld: String
  users: [User!]!
  merch: [Merch!]!
}

type User {
  id: ID!
  name: String!
}

type Tag {
  name: String!
}

input TagInput {
  name: String
}

type Merch {
  id: ID!
  name: String!
  price: Int!
  quantity: Int!
  tags: [Tag!]!
}



type Mutation {
  createUser(name: String!): User!

  createMerch(
    name: String!
    price: Int!
    quantity: Int!
    tags: [TagInput]
  ): Merch!
}
`
