import React from 'react';
import {IState} from "./State";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export class ProjectsList extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = this.props.state
    }

    render() {
        const projects = this.state.projects.map((project) => {
            return <Row>
                <Button size="sm" variant="outline-secondary" block>{project.name}</Button>
            </Row>
        })

        return <Container>
            {projects}
        </Container>
    }
}
