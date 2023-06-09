const { buildSchema } = require('graphql');

const userSchema = buildSchema(`
type Query {
user(id: Int!): User
users: [User]
}
type Mutation {
addUser(name: String!, email: String!, password: String!): User,
deleteUser(id: Int!) : User,
updateUser(id: Int!, name: String, email: String, password: String): User,
}
type User {
id: Int
name: String
email: String
password: String
}

`);
module.exports = userSchema;