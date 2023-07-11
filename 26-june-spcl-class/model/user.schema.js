import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : [true, 'name is required'],
        maxLength : [50, 'name should not be more than 50 chars']
            },

        email : {
                type : String,
                unique : true
            },
        size : String
    },
    
);

export default mongoose.model("User", userSchema)

