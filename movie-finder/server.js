const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

const users = require('./routes/usersRoute.js');

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
  "mongodb+srv://tony07:Tonydarashadow1994@@cluster0.d3cij.mongodb.net/gamedb?retryWrites=true&w=majority";

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

// coonection to mongo db

// this chould add a game in your list maybe?
// const db = mongoose.connection;

// db.once("open", () => {
//   console.log("DB is actually workig");
//   const movieCollection = db.collection("gamedetails");
//   const changeStream = movieCollection.watch();

//   changeStream.on("change", (change) => {
//     console.log(change);

//     if (change.operationType === "insert") {
//       const addedGame = change.fullDocument;
//       pusher.trigger("added", "inserted", {
//         name: addedGame.user,
//       });
//     } else {
//       console.log("Error double check pusher");
//     }
//   });
// });

//add route
app.get("/", (req, res) => res.status(200).send("it works?!"));

// app.get("/movies/sync", (req, res) => {
//   Movies.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

// app.get("/api/v1/movies", (req, res) => {
//   const gamesDB = req.body;

//   Movies.create(gamesDB, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

app.use('/api/users', users)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//start
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
