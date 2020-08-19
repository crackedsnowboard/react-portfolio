import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import projects from "../projects.json";
import ProjectCard from  "../components/ProjectCard";
import Wrapper from "../components/Wrapper"

class Home extends Component {
    state = {
        projects: projects
    };


render() {
    return (
        <div>
            <Header></Header>
            <Wrapper>
            {this.state.projects.map(project => (
                <ProjectCard
                title={project.title}
                src={project.src}
                alt={project.alt}
                text={project.text}
                link={project.link}
                github={project.github}
                />
            ))}
            </Wrapper>
            <Footer></Footer>
        </div>

    )
}
}

export default Home;