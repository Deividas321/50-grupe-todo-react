/* eslint-disable react/prop-types */
import { useState } from "react";

export function FormCreateTask(props) {
    const { addTaskCallback } = props;
    const [task, setTask] = useState('');
    const [color, setColor] = useState('#ff0000');

    function handleFormSubmit(e) {
        e.preventDefault();

        if (task.trim() === '') {
            return;
        }

        addTaskCallback(task, color);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input onChange={e => setTask(e.target.value)} value={task} type="text" />
            <input onChange={e => setColor(e.target.value)} value={color} type="color" />
            <button type="submit">Create task</button>
        </form>
    );
}