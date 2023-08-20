const express = require("express");
const serverless = require("serverless-http");
const launchesRouter = require('./routes/launches/launches.router');
const planetsRouter = require('./routes/planets/planets.router');
// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

// Define a route that responds with a JSON object when a GET request is made to the root path
router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);
app.use(`/.netlify/functions/api/launches`, launchesRouter);
app.use(`/.netlify/functions/api/planets`, planetsRouter);

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);