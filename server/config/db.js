import mongoose from "mongoose";

const uri = "mongodb://0.0.0.0:27017/";
const connectToMongo = async () => {
    try{
        const res = await mongoose.connect(uri);
        if(res){
            console.log("connected successfully");
        }
  }  
     catch(error){
    console.log(error);
  }
    
};

export default connectToMongo;