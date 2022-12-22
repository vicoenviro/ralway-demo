import mongoose from 'mongoose'

export const init = async () => {
  try {
    const URL = "mongodb+srv://vicoenviro:<password>@cluster0.h9yprjj.mongodb.net/?retryWrites=true&w=majority"
    await mongoose.connect(URL)
    console.log('Database connected.')
  } catch (error) {
    console.error('Error to connecto to database', error.message)
  }
}