import {Project} from "./Project";

export interface IState {
    projects: Project[];
    currentProjectId: string;
    currentTaskId: string;
}

