//this is where we export our schema, 
//it connects to the other index.ts file outside of this directory

import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_USERS} from './Queries/User'
import {CREATE_USER, DELETE_USER, UPDATE_PASSWORD} from './Mutations/User'

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

//this is where we register our mutations, import them and set them here to be used
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD
    }
})


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})