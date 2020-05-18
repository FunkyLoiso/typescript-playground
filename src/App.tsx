import React from 'react';
import './App.css';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ProjectsList } from "./ProjectsList";
import { TasksList } from "./TasksList";
import { TaskView } from "./TaskView";
import { IState } from "./State";
import { state } from "./testData";

export class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = state;
    }

    render() {
        console.info("App render: currentProjectId is ", this.state.currentProjectId);
        return (
            <Container fluid>
                <Row>
                    <Col sm={4} md={3} lg={2}>
                        search
                    </Col>
                    <Col>
                        <h1>Zooist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col id="projects" sm={4} md={3} lg={2}>
                        <ProjectsList
                            state={this.state}
                            setProjects={projects => this.setState({ projects: projects })}
                            setCurrentProjectId={id => this.setState({ currentProjectId: id })}
                        />
                    </Col>
                    <Col sm={4} md={4} lg={3}>                        <TasksList
                            state={this.state}
                            setProjects={projects => this.setState({ projects: projects })}
                            setCurrentTaskId={id => this.setState({ currentTaskId: id })}
                        />
                    </Col>
                    <Col>
                        <TaskView />
                    </Col>
                </Row>
            </Container>
        )
    }
}

