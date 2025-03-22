const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize AWS S3 Client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Test AWS Connection
async function testAWS() {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log('AWS Connection Successful. Existing buckets:', data.Buckets);
  } catch (err) {
    console.error('AWS Connection Error:', err);
  }
}
testAWS();

// Existing MongoDB setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB Connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});