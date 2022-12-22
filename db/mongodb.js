import mongoose from 'mongoose'

export const init = async () => {
  try {
    const URL = "mongodb+srv://vicoenviro:Metallica1002@cluster0.h9yprjj.mongodb.net/ecommerce?retryWrites=true&w=majority"
    await mongoose.connect(URL)
    console.log('Database connected.')
  } catch (error) {
    console.error('Error to connecto to database', error.message)
  }
}