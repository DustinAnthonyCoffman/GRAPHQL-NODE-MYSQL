//when making a query we have to pass 
//a type
//fields 
import {GraphQLList} from 'graphql'
import {UserType} from '../TypeDefs/User'
import {Users} from '../../Entities/Users'

export const GET_ALL_USERS = {
    //A GraphQLList wraps our type in a graphqllist type
    type:new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}