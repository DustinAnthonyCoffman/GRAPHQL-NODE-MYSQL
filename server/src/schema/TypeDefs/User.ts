//define graphql schema for a User

//objecttype lets us creaet a type
//graphqlstring is a string type
//graphqlID is an ID type
import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    })
})