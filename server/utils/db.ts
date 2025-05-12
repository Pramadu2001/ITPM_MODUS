import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

//console.log("DB_URI:", process.env.DB_URI); // Debugging: Check if DB_URI is loaded

const dbUrl: string = process.env.DB_URI || '';

const connectDB = async () => {
    try { 
        await mongoose.connect(dbUrl);
        console.log(`Database connected successfully`);
    } catch (error:any) {
        console.error(`Database connection failed: ${error.message}`);
        setTimeout(connectDB, 5000); // Retry connection every 5 seconds
    }
};

export default connectDB;
