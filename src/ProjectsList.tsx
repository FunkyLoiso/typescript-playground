import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import {ReactSortable} from "react-sortablejs"
import {testProjects} from './testData'

import {
    atom,
    useRecoilState,
} from 'recoil';

export function ProjectsList() {
    const projectsState = atom({
        key: 'projects',
        default: testProjects,
    });
    const selectedProjectState = atom({
        key: 'selectedProject',
        default: 1,
    });
    const [projects, setProjects] = useRecoilState(projectsState);
    const [selectedProject, setSelectedProject] = useRecoilState(selectedProjectState);

    const onProjectClick = (e: React.MouseEvent) => {
        const projectId = e.currentTarget.getAttribute("data-id") as string;
        console.info("Project clicked: ", projectId)
        setSelectedProject(projectId);
    }

    let items = projects.map(p =>
        <ListGroup.Item
            key={p.id}
            style={{color: p.color}}
            action onClick={onProjectClick}
            active={selectedProject === p.id}>
            {p.name}

        </ListGroup.Item>);

    return <ListGroup>
        <ReactSortable list={projects} setList={setProjects}>
            {items}
        </ReactSortable>
    </ListGroup>
}
