"use strict";

require('dotenv').config();
const corsMiddleware = require('./middleware/cors');
const jwt = require("jsonwebtoken");

const express = require("express");
const cors = require("cors");

const { NotFoundError, BadRequestError } = require("./expressError");

const morgan = require("morgan");

const app = express();

app.use(corsMiddleware);
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Import the database module
const db = require('./db');

// Secret key for JWT, replace with a secure key
const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

// Token generation function
function createToken(email) {
  return jwt.sign({ email }, SECRET_KEY);
}

// Middleware to check for a valid token
function authenticateJWT(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

// Endpoint for player registration
app.post("/register", async function (req, res, next) {
  try {
    const { username, email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
      throw new BadRequestError("Email and password are required");
    }

    // Check if the email already exists in the database
    const emailCheck = await db.query(
      `SELECT email FROM Players WHERE email = $1`,
      [email]
    );

    if (emailCheck.rows.length > 0) {
      throw new BadRequestError("Email address already registered");
    }

    // Continue with the registration process, insert into the Players table, etc.

    // Generate and return a JWT token with additional payload information
    const token = createToken(email);

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
});

// Endpoint requiring authentication
app.get("/protected", authenticateJWT, (req, res) => {
  return res.json({ message: "Protected route accessed" });
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;



// "use strict";

// /** Express app for jobly. */
// require('dotenv').config();
// const corsMiddleware = require('./middleware/cors');


// const express = require("express");
// const cors = require("cors");

// const { NotFoundError } = require("./expressError");

// const { authenticateJWT } = require("./middleware/auth");
// const authRoutes = require("./routes/auth");
// // const companiesRoutes = require("./routes/companies");
// // const usersRoutes = require("./routes/users");
// // const jobsRoutes = require("./routes/jobs");

// const morgan = require("morgan");

// const app = express();

// app.use(corsMiddleware);
// app.use(cors());
// app.use(express.json());
// app.use(morgan("tiny"));
// app.use(authenticateJWT);

// // app.use("/auth", authRoutes);
// // app.use("/companies", companiesRoutes);
// // app.use("/users", usersRoutes);
// // app.use("/jobs", jobsRoutes);


// /** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//   return next(new NotFoundError());
// });

// /** Generic error handler; anything unhandled goes here. */
// app.use(function (err, req, res, next) {
//   if (process.env.NODE_ENV !== "test") console.error(err.stack);
//   const status = err.status || 500;
//   const message = err.message;

//   return res.status(status).json({
//     error: { message, status },
//   });
// });

// module.exports = app;
