import React from 'react';
import { IState } from "./State";
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
        var projectId = e.currentTarget.getAttribute("data-id");
        console.info("Project clicked: ", projectId)
        this.props.setCurrentProjectId(projectId);
    }

    render() {
        let projects = this.props.state.projects.map(p =>
            <ListGroup.Item
                key={p.id}
                // action
                onClick={this.handleProjectClick}
                active={p.id === this.props.state.currentProjectId}
            >
                <span style={{ color: p.color }}>
                    <i className="fas fa-circle-notch" />
                </span>
                {p.name}
            </ListGroup.Item>);

        return (
            <ListGroup
                defaultActiveKey={this.props.state.projects[0].id}
                variant="flush">
                <ReactSortable list={this.props.state.projects} setList={this.setProjects}>
                    {projects}
                </ReactSortable>
            </ListGroup>)
    }
}
