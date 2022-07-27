const express = require("express")
const mongoose = require("mongoose")
const exercisesRouter =require("./routes/exercises")
const usersRouter = require("./routes/users")
const cors =require("cors");
 // running port
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// connect to the database
// mongoose.connect("mongodb+srv://agrey24:greymatter24@cluster0.l4gbe.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect("mongodb://localhost/greydb");
const connection = mongoose.connection;
 connection.once("open" ,() =>{
    console.log("MongoDB database connection established successfully");
 })

//routes
app.use("/exercises" , exercisesRouter);
app.use("/users", usersRouter)



//listen to the port
app.listen(port,() =>{
    console.log(`server running on port number:${port}`);
})
