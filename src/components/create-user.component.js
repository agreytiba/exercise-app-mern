import axios from "axios";
import React from "react";


export default class CreateUsers extends React.Component{
 constructor(props){

super(props);
this.state= {
    username: "", 
}
this.handleFormChange = this.handleFormChange.bind(this);
this.onSubmit = this.onSubmit.bind(this);


}   
handleFormChange(event){
    const{name,value} =event.target;
    this.setState({
        [name]:value
    });
}

onSubmit(event){
    event.preventDefault();
    const user={
        username:this.state.username
    }
    // console.log(user);
    // axios.post('http://localhost:3000/users/add',user)
    // .then(response=>console.log(response.data))


    axios.post('http://localhost:3000/users/add', user)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
   this.setState({
   username:""
   })
}

render (){

        return(
            <div>
                <h3>Create New User</h3>
                <form className="mt2" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        required
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleFormChange}
                     />
                </div>
                <div className="form-group mt-3">
                    <input
                    type="submit"
                    value="Create User"
                    className="btn btn-primary"
                    />

                </div>
                </form>
               
            </div>
        )
    }
} 