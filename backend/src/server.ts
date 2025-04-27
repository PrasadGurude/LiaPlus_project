import app from './index';
import { connectToDatabase } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error:any) => {
    console.error('Database connection failed', error);
    process.exit(1);
  });