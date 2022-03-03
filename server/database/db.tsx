import dotenv from 'dotenv';

dotenv.config();

const mongoose = require('mongoose')

const Connection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI, 
            { useUnifiedTopology: true, 
              useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;