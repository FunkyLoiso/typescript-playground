import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ListGroup from "react-bootstrap/ListGroup"
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactSortable } from "react-sortablejs"

interface ItemType {
    id: number;
    value: string;
}

function ListDND() {
    const [list, setList] = React.useState<ItemType[]>([
        { id: 1, value: "hammer" },
        { id: 2, value: "microscope" },
        { id: 3, value: "dodgy stuff" }
    ]);
    return (
        <ListGroup>
            <ReactSortable list={list} setList={setList}>
                {list.map(item => <ListGroup.Item key={item.id}>{item.value}</ListGroup.Item>)}
            </ReactSortable>
        </ListGroup>
    )
}

ReactDOM.render(<ListDND />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
