import React from 'react';
import {IState} from "./State";
import ListGroup from "react-bootstrap/ListGroup";

import { ReactSortable } from "react-sortablejs"

export class ProjectsList extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let projects = this.props.state.projects.map(p =>
            <ListGroup.Item key={p.id} style={{ color: p.color }}>
                {p.name}
            </ListGroup.Item>);

        return <ListGroup>
            <ReactSortable list={this.props.state.projects} setList={this.props.setProjects}>
                {projects}
            </ReactSortable>
        </ListGroup>
    }
}
