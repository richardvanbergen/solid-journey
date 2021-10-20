import express from 'express';
import payload from 'payload';

require('dotenv').config({
  path: '../../.env'
});

const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  license: process.env.PAYLOAD_LICENCE,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);