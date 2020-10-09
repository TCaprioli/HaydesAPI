import mongoose,{ Schema,Document } from 'mongoose'

export interface IUser extends Document{
  name: string
}

const UserSchema: Schema = new Schema({
  name: {type: String}
})

export const User = mongoose.model<IUser>("User", UserSchema.obj, "Users") 