import { IState } from './State'

export function getTestState(): IState {
    const state: IState = {
        projects: [
            {
                id: "1", name: "Project 1", color: "red", tasks: [
                    { id: "1", name: "catch"}
                ]
            },
            {
                id: "2", name: "Project 2", color: "green", tasks: [
                    { id: "2", name: "green catch"},
                    { id: "3", name: "also green catch"}
                ]
            },
            {
                id: "3", name: "Project 3", color: "blue", tasks: []
            }
        ],
        currentProject: undefined,
        currentTask: undefined
    };
    state.currentProject = state.projects[0];   
    return state;
}