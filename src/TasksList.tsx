import React from 'react';
import {
    atom,
    useRecoilValue,
} from 'recoil';

export function TasksList() {
    const selectedProjectState = atom({
        key: 'selectedProject',
        default: 1,
    });
    const selectedProject  = useRecoilValue(selectedProjectState);
    return <div>
        Tasks from project {selectedProject}
    </div>
}
