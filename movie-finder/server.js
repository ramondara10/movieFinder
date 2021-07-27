const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const users = require('./routes/userRoute');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use(routes);

//DB config
const connection_url =
  "mongodb+srv://tony07:Tonydarashadow1994@@cluster0.d3cij.mongodb.net/moviedb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

//add route
app.get("/", (req, res) => res.status(200).send("it works?!"));


app.use('/api/users', users)


//start
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
