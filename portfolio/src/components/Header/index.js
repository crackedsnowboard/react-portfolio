import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return <div className="jumbotron jumbotron-fluid bg-info pb-2 pt-4">
  <div className="container">
      <div className="row">
          <div className="col-sm-4">

              <h1 className="display-4 font-weight-bold pt-n1 text-center">Joel Mathen</h1>
          </div>
          <div className="col-sm-8 pb-n3">
              <ul className="pb-n3 pt-2">
                  <li className="lead ml-3">Lifelong learner currently studying full-stack web development</li>
                  <li className="lead ml-3">Previous experience conducting cybersecurity assessments</li>
                  <li className="lead ml-3">Ex-CPA that brings a business lens to all projects</li>
                  <li className="lead ml-3"> Mandarin Chinese speaker</li>
              </ul>
          </div>
      </div>
      {/* <hr className="my-4"></hr> */}
      <div className="row justify-content-center">

          {/* <div className="col-sm-12 justify-content-center"> */}
              <a className="btn btn-secondary btn-lg mr-1" href="https://github.com/crackedsnowboard"
                  type="button" role="button"><i className="fa fa-github"></i></a>
                  
              <a className="btn btn-secondary btn-lg mr-1" href="https://www.linkedin.com/in/joel-mathen/"
                  role="button"><i className="fa fa-linkedin-square"></i></a>

                  
              <Link to="/resume" className="btn btn-secondary btn-lg"><i className="fa fa-file"></i></Link>
                 
          {/* </div> */}
         
      </div>
  </div>
</div>
}

export default Header;