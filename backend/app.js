const express = require("express");
const bodyParser = require("body-parser");
const isAuth = require('./middleware/auth.js')
var cookieParser = require('cookie-parser');


const { showRouter } = require("./routes/showRoutes");
const { theatreRouter } = require("./routes/theatreRoutes");
const { movieRouter } = require("./routes/movieRoutes");
const { adminMovieRouter } = require("./adminRoutes/adminMovieRoutes.js");
const { adminShowRouter } = require("./adminRoutes/adminShowRoutes.js");
const { adminTheatreRouter } = require("./adminRoutes/adminTheatreRoutes.js");

const { bookingRouter } = require('./routes/bookingRoutes');
const { authRouter } = require('./routes/signinRoutes');

const app = express();


app.use(cookieParser());

//Cors config
let corsOptions = {
  origin: ['http://localhost:5173', 'htpp://localhost:5173/'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
}

const cors = require('cors');
const checkAdmin = require("./middleware/checkAdmin.js");
app.use(cors(corsOptions))

require('dotenv').config();

//middle ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(isAuth);

//Basic client routes
app.use('/api/movie', movieRouter);
app.use('/api/show', showRouter);
app.use('/api/theatre', theatreRouter);


//Basic admin routes
app.use("/api/admin", checkAdmin, adminMovieRouter);
app.use("/api/admin", checkAdmin, adminShowRouter);
app.use("/api/admin", checkAdmin, adminTheatreRouter);

app.use('/api/auth', authRouter);
app.use('/api/booking', bookingRouter)

module.exports = app;