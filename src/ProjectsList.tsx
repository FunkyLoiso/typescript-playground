import React from 'react';
import {IState} from "./State";
import ListGroup from "react-bootstrap/ListGroup";

import { ReactSortable } from "react-sortablejs"

export class ProjectsList extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = this.props.state;
        this.setProjects = this.setProjects.bind(this)
    }

    setProjects(projects: any) {
        this.setState({
            projects: projects
        })
    }

    render() {
        let projects = this.state.projects.map(p =>
            <ListGroup.Item key={p.id} style={{ color: p.color }}>
                {p.name}
            </ListGroup.Item>);

        return <ListGroup>
            <ReactSortable list={this.state.projects}
                           setList={this.setProjects}>
                {projects}
            </ReactSortable>
        </ListGroup>
    }
}
