import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{



    render(){
        return(
            <nav className="navbar nav-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand" href="#">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/create" className="nav-link" href="#">create</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link  to="/user" className="nav-link">user</Link>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
        )
    }
}

