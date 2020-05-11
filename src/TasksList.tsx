import React from 'react';
import { IState } from "./State";
import ListGroup from "react-bootstrap/ListGroup";

import { ReactSortable } from "react-sortablejs"

export class TasksList extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.info("TasksList: currentProjectId is ", this.props.state.currentProjectId);
        if (this.props.state.currentProjectId === "") {
            return <div>Please, select a project</div>
        }
        else {
            return <div>Tasks from project {this.props.state.currentProjectId}</div>
        }

        //return <ListGroup>
        //    {projects}
        //</ListGroup>
    }
}
