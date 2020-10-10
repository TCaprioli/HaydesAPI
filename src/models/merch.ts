import mongoose,{ Schema,Document } from 'mongoose'

interface ITag extends Document{
    name: string
}

export interface IMerch extends Document{
  name: string,
  price: number,
  quantity: number,
  tags: ITag[]
}


const MerchSchema: Schema = new Schema({
  name: {type: String},
  price: {type: Number},
  quantity: {type: Number},
  tags: [{name: {type: String}}]

})

export const Merch = mongoose.model<IMerch>("Merch", MerchSchema.obj, "Merch") 
