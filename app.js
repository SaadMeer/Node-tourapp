const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

//import Tour & User Router form tourroutes & userroutes file
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

//http
const app = express();
//to availae the data in body we use middleware and for other purpose as well
app.use(morgan("dev"));
app.use(express.json());
//to get static files ccs file img files html files etc in this which are in public
app.use(express.static(`${__dirname}/public`));

//Router use as middlewarw


//middlewares
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//mounting routers come after middle ware
//Mounting use route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;