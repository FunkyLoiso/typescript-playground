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
                    <Col>
                        <h1>Zooist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col><ProjectsList state={this.state}/></Col>
                    <Col><TasksList /></Col>
                    <Col><TaskView /></Col>
                </Row>
            </Container>
        )
    }
}

