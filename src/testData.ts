import {Project} from './Project'
import {Task} from './Task'

export class TestState {
    projects: Project[];
    tasks: Task[];
    selectedProjectId: string;
    selectedTaskId: string;

    constructor(projects: Project[], tasks: Task[], selectedProjectId: string, selectedTaskId: string) {
        this.projects = projects;
        this.tasks = tasks;
        this.selectedProjectId = selectedProjectId;
        this.selectedTaskId = selectedTaskId;
    }
}

export const state = new TestState(
    [
        new Project("1", "Project 1", "red"),
        new Project("2", "Project 2", "green"),
        new Project("3", "Project 3", "blue"),
    ],
    [],
    "", ""
);
