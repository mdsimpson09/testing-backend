// cors.js

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

// Construct the actual CORS middleware
const corsMiddleware = cors(corsOptions);

// Export the middleware itself
module.exports = corsMiddleware;