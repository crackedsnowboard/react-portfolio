import React from "react";
import "./style.css";


function ProjectCard(props) {
    return (
        <div class="col-sm-4">
            <div className="card border-secondary">
                <div className="card-header border border-dark text-center text-dark font-weight-bold">
                    {props.title}
                </div>
                <img src={props.src} className="card-img-top img-thumbnail" alt={props.alt} />
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                    <div className="d-flex justify-content-center">
                        <a href={props.link} className="btn btn-info mr-3"><i className="fa fa-info-circle"> site</i></a>
                        <a href={props.github} className="btn btn-info"><i className="fa fa-code"> repo</i></a>
                    </div>
                </div>

            </div>
        </div>
    )
}







export default ProjectCard;