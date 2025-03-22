import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,  // 5 seconds timeout for initial connection
      socketTimeoutMS: 45000,          // 45 seconds timeout for queries
      bufferCommands: false,           // Important for serverless environments
      maxPoolSize: 10,                 // Connection pool size
      minPoolSize: 2                   // Minimum connections to keep open
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📛 DB Name: ${conn.connection.name}`);
    console.log(`📊 Ready State: ${conn.connection.readyState}`);

    // Event listeners for connection monitoring
    conn.connection.on('connected', () => 
      console.log('🟢 Mongoose default connection open'));
    
    conn.connection.on('error', (err) => 
      console.error('🔴 Mongoose default connection error:', err));
    
    conn.connection.on('disconnected', () => 
      console.log('🟡 Mongoose default connection disconnected'));

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await conn.connection.close();
      console.log('⏹️ Mongoose default connection disconnected through app termination');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.error('🔗 Connection URI:', process.env.MONGO_URI?.slice(0, 30) + '...'); // Partial URI for debugging
    process.exit(1);
  }
};
