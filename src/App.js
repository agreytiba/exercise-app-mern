
import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import  ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exrecise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
   <Router>
    <div className="container-md">
    <Navbar />
    <br/>
   <Routes>
    <Route path="/" exact element={<ExerciseList/>} /> 
    <Route path="/edit/:id"  render={(props)=><EditExercise {...props}/>} /> 
    <Route path="/create"   element={<CreateExercises/>} /> 
    <Route path="/user"   element={<CreateUser/>} /> 
  </Routes>
   </div>
   </Router>
  
  );
}

export default App;
