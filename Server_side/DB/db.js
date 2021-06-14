import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()



mongoose.connect(process.env.CONNECTION, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log('db connection success');
})
.catch((err) =>{
    console.log('the error in db' + err);
})
mongoose.set("useFindAndModify",false)