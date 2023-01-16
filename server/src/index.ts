//initial steps to our application
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {schema} from './schema'
import cors from 'cors'
import {createConnection} from 'typeorm'
import {Users} from './Entities/Users'

const main = async () => {
    //configuration will be done async
    //connection database
    //applying middleware
    //listening to our server

    //create connection variable from typeorm to create a connection to our database
    //we generate all tables in our mysql workbench when we have entities
    //setting synchronize to true allows us to set our entities in the list and create tables in workbench
    //we dont exactly want sync to be true because itll try and create a new table everytime
    await createConnection({
        type: "mysql",
        database: "GraphqlCRUD",
        username: "root",
        password: "1five55Ol$en",
        logging: true,
        synchronize: false,
        entities: [Users]
    });

    const app = express()
    
    //connects frontend to backend to prevent errors when making requests
    app.use(cors())

    //allows us to parse all json thats sent in requests, 
    // we use json as the body for every http requests to our server
    app.use(express.json())

    //set graphql endpoint for all requires using graphqlhttp middleware
    //also allows us to use graphical interface in browser
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001")
    })
}

main().catch((err) => {
    console.log(err)
})