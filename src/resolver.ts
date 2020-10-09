import { User, IUser } from './models/user'


interface ICreateUserInput {
  name: IUser['name'];
}

export const resolvers = {
  Query: {
    helloWorld:()=> "hello",
    users:()=> User.find() 
  },
  Mutation: {
    createUser: async(_ :null, input: ICreateUserInput)=>{
      let newUser = new User({name: input.name})
      await newUser.save()
      return newUser

    }
  }

} 
