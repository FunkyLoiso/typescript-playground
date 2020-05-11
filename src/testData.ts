import {Project} from './Project'
import {Task} from './Task'

//export class TestState {
//    projects: Project[];
//    selectedProjectId: string;
//    selectedTaskId: string;

//    constructor(projects: Project[]) {
//        this.projects = projects;
//    }
//}

export const state = {
    projects: [
        {
            id: "1", name: "Project 1", color: "red", tasks: [
                { id: "1", text: "catch", created: new Date(), projectId: "1" }
            ]
        },
        {
            id: "2", name: "Project 2", color: "green", tasks: [
                { id: "2", text: "green catch", created: new Date(), projectId: "2" },
                { id: "3", text: "also green catch", created: new Date(), projectId: "2" }
            ]
        },
        {
            id: "3", name: "Project 3", color: "blue", tasks: []
        }
    ],
    currentProjectId: "",
    currentTaskId: ""
};
