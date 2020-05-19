import {Project} from "./Project";
import {Task} from "./Task";

export interface IState {
    projects: Project[];
    currentProject: Project | undefined;
    currentTask: Task | undefined;
}

