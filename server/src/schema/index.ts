//this is where we export our schema, 
//it connects to the other index.ts file outside of this directory

import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {

    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {}
})


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})