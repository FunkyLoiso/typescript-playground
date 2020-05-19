import React from 'react';
import './App.css';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ProjectsList } from "./ProjectsList";
import { TasksList } from "./TasksList";
import { IState } from "./State";
import { getTestState } from "./testData";

export class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = getTestState();
    }

    render() {
        console.info("App render: current project is ", this.state.currentProject!.name);
        return (
            <Container fluid>
                <Row>
                    <Col sm={4} md={3} lg={2}>
                        search
                    </Col>
                    <Col>
                        <h4>{this.state.currentProject ? this.state.currentProject.name : "Zooist"}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col id="projects" sm={4} md={3} lg={2}>
                        <ProjectsList
                            projects={this.state.projects}
                            setProjects={projects => this.setState({ projects: projects })}
                            currentProject={this.state.currentProject!}
                            setCurrentProject={project => this.setState({ currentProject: project })} />
                    </Col>
                    <Col id="tasks" sm={4} md={4} lg={3}>
                        <TasksList
                            currentProject={this.state.currentProject!}
                            setCurrentProject={project => this.setState({ currentProject: project })}
                            currentTask={this.state.currentTask!}
                            setCurrentTask={task => this.setState({ currentTask: task })} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

