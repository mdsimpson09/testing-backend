const cors = require("cors");
const express = require('express');

// const corsMiddleware = cors({
//   origin: "http://localhost:3001/api/playersApi", // Replace with your frontend app's URL
const corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3002'], 
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

module.exports = corsMiddleware;