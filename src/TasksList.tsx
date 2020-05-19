import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { ReactSortable } from "react-sortablejs"
import { Project } from './Project';
import { Task } from './Task';

export class TasksList extends React.Component<{
    currentProject: Project;
    setCurrentProject(project: Project): void;
    currentTask: Task;
    setCurrentTask(task: Task);
}, {}> {
    constructor(props) {
        super(props);
        this.handleTaskClick = this.handleTaskClick.bind(this)
        this.setProjectTasks = this.setProjectTasks.bind(this)
    }

    setProjectTasks(project: Project, tasks: Task[]) {
        console.log("Set project tasks for ", project.name);
        project.tasks = tasks;
        this.props.setCurrentProject(project);
    }

    handleTaskClick(e: React.MouseEvent) {
        const taskId = e.currentTarget.getAttribute("data-id");
        const task = this.props.currentProject.tasks.find(t => t.id === taskId)!;
        console.info("Task clicked: ", task.name)
        this.props.setCurrentTask(task);
    }

    render() {
        const currentProject = this.props.currentProject;
        return (
            <>
                <ListGroup variant="flush">
                    <ReactSortable
                        list={currentProject.tasks}
                        setList={tasks => this.setProjectTasks(currentProject, tasks)}>
                        {
                            this.props.currentProject.tasks.map(task =>
                                <ListGroup.Item
                                    key={task.id}
                                    onClick={this.handleTaskClick}
                                    active={this.props.currentTask ? task.id === this.props.currentTask.id : false}>
                                    {task.name}
                                </ListGroup.Item>)
                        }
                    </ReactSortable>
                </ListGroup>
            </>)
    }
}
