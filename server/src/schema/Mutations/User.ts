import { UserType } from "../TypeDefs/User";
import { GraphQLString } from "graphql";

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    //fix this should not be any
    resolve(parent: any, args: any) {
        const {name, username, password} = args;
        return args
    }
}