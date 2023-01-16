//when making a query we have to pass 
//a type
//fields 
import {GraphQLList} from 'graphql'
import {UserType} from '../TypeDefs/User'
import {Users} from '../../Entities/Users'
import { UserI } from '../../Interfaces/Interfaces'

export const GET_ALL_USERS = {
    //A GraphQLList wraps our type in a graphqllist type but we still need to use 
    //an interface for a custom user type
    type:new GraphQLList(UserType),
    resolve(): Promise<UserI[]> {
        return Users.find();
    }
}