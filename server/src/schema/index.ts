//this is where we export our schema, 
//it connects to the other index.ts file outside of this directory

import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_USERS} from './Queries/User'
import {CREATE_USER} from './Mutations/User'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    }
})


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})