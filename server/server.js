import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 4001;
app.listen(port, console.log(`App started on ${port}`));