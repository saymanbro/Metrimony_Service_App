import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
               
                gender:{
                        type:String,
                        required:true
                } ,
                name:{
                        type:String,
                        required:true
                } ,
                email:{
                        type:String,
                        required:true
                } ,
                education:{
                        type:String,
                        required:true
                },
                profession:{
                        type:String,
                        required:true
                } ,
                sibling:{
                        type:String,
                        required:true
                },
                fname:{
                        type:String,
                        required:true
                },
                fprofession:{
                        type:String,
                        required:true
                },
                marrystatus:{
                        type:String,
                        required:true
                },
                presentadd:{
                        type:String,
                        required:true
                },
                permanentadd:{
                        type:String,
                        required:true
                }



})


const User = new mongoose.model('user', userSchema);

export default User;