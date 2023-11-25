const cors = require('cors');

// Allow requests from any origin/frontend URL
const FRONTEND_ORIGIN = 'http://localhost:3000';

router.use(cors({
  origin: FRONTEND_ORIGIN   
}));

// Create CORS middleware
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;