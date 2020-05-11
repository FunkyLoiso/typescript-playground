import {Task} from "./Task"

export class Project {
    id: string;
    name: string;
    color: string;
    tasks: Task[];

    constructor(id: string, name: string, color: string) {
        this.id = id
        this.name = name
        this.color = color
    }
}
