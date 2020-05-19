import {Task} from "./Task"

export interface Project {
    id: string;
    name: string;
    color: string;
    tasks: Task[];
}
