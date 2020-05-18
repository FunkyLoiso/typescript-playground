import React from 'react';
import './App.css';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {ProjectsList} from "./ProjectsList";
import {TasksList} from "./TasksList";
import {TaskView} from "./TaskView";
import {
    RecoilRoot,
} from 'recoil';

export function App() {
    return (
        <RecoilRoot>
            <Container fluid>
                <Row>
                    <Col sm={4} md={3} lg={2} className="col-search">
                        search
                    </Col>
                    <Col>
                        <h1>Zooist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3} lg={2} className="col-projects-list">
                        <ProjectsList/>
                    </Col>
                    <Col sm={4} md={4} lg={3} className="col-tasks-list">
                        <TasksList/>
                    </Col>
                    <Col className="col-task">
                        <TaskView/>
                    </Col>
                </Row>
            </Container>
        </RecoilRoot>);
}
