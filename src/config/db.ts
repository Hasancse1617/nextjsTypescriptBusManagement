import mongoose, {ConnectOptions} from "mongoose";
import "dotenv/config";

const connectDB = async() =>{
     try {
        const response = await mongoose.connect(`${process.env.URL}`, {useUnifiedTopology: true, useNewUrlParser: true} as ConnectOptions);
        console.log('Connection created successfully');
     } catch (error) {
        console.log(error);
     }
}
export default connectDB