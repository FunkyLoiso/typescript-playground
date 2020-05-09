import {Project} from "./Project";
import {Task} from "./Task";

export interface IState {
    projects: Project[];
    tasks: Task[];
    selectedProjectId: string;
    selectedTaskId: string;
}

