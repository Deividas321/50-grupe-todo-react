import { useState } from "react";

export function Task(params) {
    const { data, updateTaskText, updateTaskColor, updateTaskState, removeTask } = params;
    const { id, text, color, state } = data;

    const [taskVisibility, setTaskVisibility] = useState(true);
    const [editForm, setEditForm] = useState(false);
    const [inputText, setInputText] = useState(text);
    const [inputColor, setInputColor] = useState(color);
    const style = {
        borderLeftColor: color ?? '#ccc',
    };

    function handleUpdate(e) {
        e.preventDefault();
        const cleanText = inputText.trim();

        if (cleanText !== '') {
            updateTaskText(id, cleanText);
            updateTaskColor(id, inputColor);
            setEditForm(false);
        }
    }

    function handleDelete() {
        removeTask(id);
    }

    function handleReset() {
        setInputText(text);
        setInputColor(color);
    }

    function handleClear() {
        setInputText('');
        setInputColor('#cccccc');
    }

    if (taskVisibility === false) {
        return;
    }

    return (
        <article className="item" data-state={state === 'done' ? 'done' : ''} style={style}>
            <div className="date">2024-07-17 14:29:11</div>
            <div className="state">Atlikta</div>
            <div className="text">{text}</div>
            <form onSubmit={handleUpdate} className={editForm ? '' : 'hidden'}>
                <input onChange={e => setInputText(e.target.value)} type="text" value={inputText} />
                <input onChange={e => setInputColor(e.target.value)} type="color" value={inputColor} />
                <div className="btnList">
                    <button onClick={handleReset} className="clear" type="reset">Reset</button>
                    <button onClick={handleClear} className="clear" type="reset">Clear</button>
                    <button className="update" type="submit">Update</button>
                    <button onClick={() => setEditForm(prev => false)} className="cancel" type="button">Cancel</button>
                </div>
            </form>
            <div className="actions">
                {state !== 'done' && <>
                    <button onClick={() => updateTaskState(id)} className="done">Done</button>
                    <div className="divider"></div>
                    <button className="edit" onClick={() => setEditForm(prev => true)}>Edit</button>
                </>}
                <button onClick={handleDelete} className="delete">Delete</button>
            </div>
        </article>
    );
}