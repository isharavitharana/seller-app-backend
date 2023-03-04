import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.example' });
}

export const MONGODB_URI = process.env['MONGODB_URI'];

if (!MONGODB_URI) {
  console.log('No mongoDB connection string.');
}
