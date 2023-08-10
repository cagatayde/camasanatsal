import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB bağlandı'))
    .catch((err) => console.log('Bi sorun var'));
}

export default connectDB;