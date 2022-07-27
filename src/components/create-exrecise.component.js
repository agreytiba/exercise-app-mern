import React from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";

export default class CreateExercises extends React.Component{

    constructor(props){
        super(props);
        
        // this.onChangeUserName = this.onChangeUserName.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state= {
            username: "",
            description:"",
            duration:0,
            date:new Date().toString(),
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users/')
        .then( response =>{
            if(response.data.length > 0){
            this.setState({
                users:response.data.map( user =>user.username),
                username:response.data[0].username
            })
            }
        })
         
        .catch(function (error) {
          console.log(error);
        });
    }

    //update changes in state
    // onChangeUserName(e){this.state({ username:e.target.value});}

    // onChangeDescription(e){this.state({description:e.target.value});}
    // onChangeDuration(e){this.state({duration:e.target.value});}

     onChangeDate = (date) => {
    
    this.setState({selected: date});
   
  }
   
    handleFormChange(event){
        const{name,value} =event.target;
        this.setState({
            [name]:value
        });
    }

    onSubmit(event){
        event.preventDefault();
        const exercise ={
            username:this.state.username,
            description:this.state.description,
            duration: this.state.duration,
            date:this.state.date 
        
        }
        console.log(exercise);
        axios.post('http://localhost:3000/exercises/add', exercise)
        .then( res =>console.log(res.data));

        window.location ='/';

        
    }



    render (){
        return(
            <div className="container-fluid">
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                     <div className="form-group mt-2">
                        <label>Username</label>
                        <select ref="userInput"
                          name="username" 
                          value={this.state.username}
                          required
                          className="form-control"
                          onChange={this.handleFormChange}>
                            {
                                this.state.users.map(function(user){
                                return<option
                                    key={user}
                                    value={user}>
                                        {user}
                                </option>
                                }
                                )
                            }

                        </select>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Description</label>
                    <input type="text"
                       className="form-control"
                       name="description"
                       value={this.state.description}
                       onChange={this.handleFormChange}/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="duration">Duration</label>
                    <input type="number"
                       className="form-control"
                       name="duration"
                       value={this.state.duration}
                       onChange={this.handleFormChange}/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="date">Date: </label>
                    
                    <div>
                        {/* there un error on date picker to refracted later */}
                   <DatePicker
                   name="date"
                   
                   onChange={this.onChangeDate}
                   
                   selected={this.state.selected}
                 allowSameDay
                
            
           
            />
                   </div>
                  </div>
                  <div className="mt-2">
                    <input type="submit" value="create Exercise Log" className="btn btn-primary"/>
                  </div>
                </form>
              
            </div>
        )
    }
}