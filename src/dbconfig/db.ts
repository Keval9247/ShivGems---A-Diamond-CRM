import mongoose from 'mongoose';

const MONGODB_URI: any = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable in .env.local'
    );
}

let cached = global.mongoose as any

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongoDB() {
    if (cached.conn) {
        return cached.conn; // If a connection already exists, reuse it.
    }
    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false, // Disable Mongoose buffering
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log('MongoDB connected successfully');
            return mongoose;
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);
            process.exit(1);
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null; // Reset the promise if the connection fails
        throw err;
    }

    return cached.conn;
}

export default connectMongoDB;