import React from 'react';
import './App.css';

import { Project } from "./data-models/Project"
import { Task } from "./data-models/Task"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {ProjectsList} from "./ProjectsList";
import {TasksList} from "./TasksList";
import {TaskView} from "./TaskView";

interface AppState {
    projects: Project[];
    tasks: Task[];
    selectedProjectId: string;
    selectedTaskId: string
}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            projects: [{ id: "1", name: "coq", color: "ruby" }],
            tasks: [{ id: "1", text: "catch", created: new Date(), projectId: "1" }],
            selectedProjectId: "1",
            selectedTaskId: "1"
        };
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        Header should be here
                    </Col>
                </Row>
                <Row>
                    <Col><ProjectsList /></Col>
                    <Col><TasksList /></Col>
                    <Col><TaskView /></Col>
                </Row>
            </Container>
        )
    }
}

