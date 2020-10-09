import keys from './config/keys.config'
import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer,gql } from 'apollo-server-express'
import { resolvers } from './resolver'
import { typeDefs } from './typeDefs'

const server = async()=>{
  try{
    const app = express();

    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.applyMiddleware({app})

    await mongoose.connect(keys.MDB_KEY as string, {useNewUrlParser: true})

    app.get('/', (req,res)=>{
      res.send("Hello!")
    })

    app.listen({port: 3000}, ()=>{
      console.log("🚀 running on localhost:3000")
    })
  }
    catch(err){
      console.log(err)
  }  
}


server()