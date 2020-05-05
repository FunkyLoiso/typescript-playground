import React from 'react';
import './App.css';

import { Project } from "./data-models/Project"
import { Task } from "./data-models/Task"

interface AppState {
    projects: Project[];
    tasks: Task[];
    selectedProjectId: string;
    selectedTaskId: string
}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            projects: [{ id: "1", name: "coq", color: "ruby" }],
            tasks: [{ id: "1", text: "catch", created: new Date(), projectId: "1" }],
            selectedProjectId: "1",
            selectedTaskId: "1"
        };
    }

    render() {
        return (
            <h3>Projects and tasks</h3>
        )
    }
}

