import React from "react";
import axios from "axios";
import{Link} from "react-router-dom";

export default class ExerciseList extends React.Component{
    constructor(props){
        super(props);
        this.deleteExercise =this.deleteExercise.bind(this);
      this.state ={exercises: []}; 
    }

    componentDidMount() {
        axios.get('http://localhost:3000/exercises/')
        .then(response =>{
            this.setState({exercises:response.data})
        })
        .catch((error) =>{
            console.log(error);
        })
    }
deleteExercise(id){
    axios.delete('http://localhost:3000/exercises/'+id)
    .then(res =>console.log(res.data)); 
    this.setState({
        exercises:this.state.exercises.filter(el =>el._id !== id)
    })
}
 exerciseList(){
    return this.state.exercises.map( currentexercise =>{
   return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>
    }) 
 }


    render (){
        return(
            <div className="container">
                <h3 className="mb-2"> logged exercises</h3>
               <table  className="table table-sucess table-striped">
                <thead className="thead bg-dark text-white py-1">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.exerciseList()}
                </tbody>
               </table>
               
            </div>
        )
    }
}


const Exercise = props =>(  
<tr>
  <td >{props.exercise.username}</td>
  <td>{props.exercise.description}</td>
  <td >{props.exercise.duration}</td>
  <td>{props.exercise.date.substring(0,10)}</td>
<td>
  <Link className="text-dark mx-1"  to={'/edit/'+props.exercise._id}>edit</Link> | <a href="#" className="btn"  onClick={() =>{props.deleteExercise(props.exercise._id)}}> delete</a>
</td>
</tr>
)