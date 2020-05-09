import React from 'react';
import {IState} from "./State";

export class ProjectsList extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = this.props.state
    }

    render() {
        return (<span>Projects count: {this.state.projects.length}</span>)
    }
}
