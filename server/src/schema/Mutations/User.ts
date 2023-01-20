import { UserType } from "../TypeDefs/User";
import { GraphQLString, GraphQLID } from "graphql";
import {Users} from '../../Entities/Users';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    //fix this should not be any
    async resolve(parent: any, args: any) {
        const {name, username, password} = args;
        await Users.insert({name, username, password})
        return args;
    }
}

export const DELETE_USER = {
    type: UserType,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(id)
    }
}

export const UPDATE_PASSWORD = {
    type: UserType,
    args: {
        username: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {username, oldPassword, newPassword} = args;
        const user = await Users.findOne({where: { username: username}})
        const userPassword = user?.password;
        if(oldPassword === userPassword) {
            return await Users.update({username: username}, {password: newPassword})
        } else {
            throw new Error("Passwords do not match")
        }
    }
}



// export const UPDATE_USER = {
//     type: UserType,
//     args: {
//         name: {type: GraphQLString},
//         username: {type: GraphQLString},
//         password: {type: GraphQLString},
//     },
//     async resolve(parent: any, args: any) {
//         const {id, name, username, password} = args;
//         const user = await Users.findBy(id)
//         user.name = name;
//         user.username = username;
//         user.password = password;
//     }
// }