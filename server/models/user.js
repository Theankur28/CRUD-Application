import mongoose from "mongoose";
const userschema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    age:{
        type: Number,
    },
});

const userModel = mongoose.model("users", userschema);
export default userModel;