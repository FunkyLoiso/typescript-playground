import React from 'react';
import './App.css';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {ProjectsList} from "./ProjectsList";
import {TasksList} from "./TasksList";
import {TaskView} from "./TaskView";
import {IState} from "./State";
import {state} from "./testData";

export class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = state;
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col
                        sm={4} md={3} lg={2}
                        //className="d-none d-sm-block"       // hide on smallest screens
                        style={{border: "1px solid red"}} // debug styling
                    >
                        search
                    </Col>
                    <Col style={{border: "1px solid blue"}}
                    >
                        <h1>Zooist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col
                        sm={4} md={3} lg={2}
                        //className="d-none d-sm-block"       // hide on smallest screens
                        style={{border: "1px solid red"}} // debug styling
                    >
                        <ProjectsList state={this.state}/>
                    </Col>
                    <Col
                        sm={5} md={4} lg={3}
                        style={{border: "1px solid green"}} // debug styling
                    >
                        <TasksList/>
                    </Col>
                    <Col
                        style={{border: "1px solid blue"}} // debug styling
                    >
                        <TaskView/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

