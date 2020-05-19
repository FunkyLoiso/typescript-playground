import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { ReactSortable } from "react-sortablejs"
import { Project } from './Project';

export class ProjectsList extends React.Component<{
    projects: Project[];
    setProjects(projects: Project[]): void;
    currentProject: Project;
    setCurrentProject(project: Project): void;
}, {}> {
    constructor(props: any) {
        super(props);
        this.handleProjectClick = this.handleProjectClick.bind(this);
    }

    handleProjectClick(e: React.MouseEvent) {
        const projectId = e.currentTarget.getAttribute("data-id");
        const project = this.props.projects.find(p => p.id === projectId)!;
        console.info("Project clicked: ", project.name)
        this.props.setCurrentProject(project);
    }

    render() {
        return (
            <ListGroup
                defaultActiveKey={this.props.projects[0].id}
                variant="flush">
                <ReactSortable
                    list={this.props.projects}
                    setList={this.props.setProjects}>
                    {
                        this.props.projects.map(p =>
                            <ListGroup.Item
                                key={p.id}
                                onClick={this.handleProjectClick}
                                active={p.id === this.props.currentProject.id}>
                                <span style={{ color: p.color }}>
                                    <i className="fas fa-circle-notch" />
                                </span>
                                {p.name}
                            </ListGroup.Item>
                        )
                    }
                </ReactSortable>
            </ListGroup>)
    }
}
