import mongoose from 'mongoose';

async function dbConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB Connected');
    }catch(err){
        console.log(err, 'Error connecting to DB');
    }
}

export default dbConnect;
