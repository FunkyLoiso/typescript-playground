import React from 'react';
import { IState } from "./State";
import ListGroup from "react-bootstrap/ListGroup";

import { ReactSortable } from "react-sortablejs"

import { Project } from './Project';
import { Task } from './Task';

export class TasksList extends React.Component<any> {
    constructor(props) {
        super(props);
        this.setProjectTasks = this.setProjectTasks.bind(this)
        this.handleTaskClick = this.handleTaskClick.bind(this)
    }

    setProjectTasks(project: Project, tasks: Task[]) {
        project.tasks = tasks;
        this.props.setProjects(this.props.state.projects);
    }

    handleTaskClick(e: React.MouseEvent) {
        var taskId = e.currentTarget.getAttribute("data-id");
        console.info("Task clicked: ", taskId)
        if (typeof taskId === "string") {
            this.props.setCurrentTaskId(taskId);
        }
    }


    render() {
        console.info("TasksList: currentProjectId is ", this.props.state.currentProjectId);
        let currentProjectId = this.props.state.currentProjectId;
        if (currentProjectId === "") {
            return <div>Please, select a project</div>
        }
        else {
            let state: IState = this.props.state;
            let curProject = state.projects.find(p => p.id == currentProjectId);
            if (typeof curProject !== "undefined") {
                var tasks = curProject.tasks.map(task =>
                    <ListGroup.Item
                        key={task.id}
                        action
                        onClick={this.handleTaskClick}
                    >
                        {task.text}
                    </ListGroup.Item>);
                return <ListGroup>
                        <ReactSortable
                            list={curProject.tasks}
                            setList={tasks => this.setProjectTasks(curProject!, tasks)}
                        >
                        {tasks}
                        </ReactSortable>
                    </ListGroup>
            }
            return <div>Tasks from project {this.props.state.currentProjectId}</div>
        }

        //return <ListGroup>
        //    {projects}
        //</ListGroup>
    }
}
