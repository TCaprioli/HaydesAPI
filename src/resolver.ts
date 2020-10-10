import { Merch, IMerch } from './models/merch'
import { User, IUser } from './models/user'


interface ICreateUserInput {
  name: IUser['name'];
}

interface ICreateMerchInput{
  name: IMerch['name'],
  price: IMerch['price'],
  quantity: IMerch['quantity'],
  tags: IMerch['tags']
}

export const resolvers = {
  Query: {
    helloWorld:()=> "hello",
    users:()=> User.find(),
    merch:()=> Merch.find() 
  },
  Mutation: {
    createMerch: async(_: null, input: ICreateMerchInput)=>{
      const {name, price, quantity, tags} = input
      let newMerch = await Merch.create({name, price, quantity,tags})
      return newMerch
    },
    createUser: async(_ :null, input: ICreateUserInput)=>{
     }
  }


  

} 
