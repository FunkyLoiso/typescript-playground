import React from 'react';
import {IState} from "./State";
import ListGroup from "react-bootstrap/ListGroup";

import { ReactSortable } from "react-sortablejs"
import { Project } from './Project';

export class ProjectsList extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.setProjects = this.setProjects.bind(this)
        this.handleProjectClick = this.handleProjectClick.bind(this)
    }

    setProjects(projects: Project[]) {
        this.props.setProjects(projects);
    }

    handleProjectClick(e: React.MouseEvent) {
        var prjectId = e.currentTarget.getAttribute("data-id");
        console.info("Project clicked: ", prjectId)
        if (typeof prjectId === "string") {
            this.props.setCurrentProjectId(prjectId);
        }
    }

    render() {
        let projects = this.props.state.projects.map(p =>
            <ListGroup.Item
                key={p.id}
                style={{ color: p.color }}
                action onClick={this.handleProjectClick}
            >
                {p.name}
            </ListGroup.Item>);

        return <ListGroup>
            <ReactSortable list={this.props.state.projects} setList={this.setProjects}>
                {projects}
            </ReactSortable>
        </ListGroup>
    }
}
