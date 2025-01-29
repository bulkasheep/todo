import { useState } from 'react';
import styles from './styles.module.css';
import inputs from '../../inputs.module.css';


function AddTask({ onAdd }) {
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        onAdd(title);
        setTitle("");
    };

    const onChange = (event) => {
        setTitle(event.target.value)
    };

    const onKeyDown = (event) => {
        if (event.key === "Enter" && title !== "") handleAdd();
    };

    return (
        <div className={styles.container}>
            <span className={styles.text}>
                Новая задача
            </span>
            <input type="text"
                value={title}
                className={inputs.input}
                onChange={onChange} onKeyDown={onKeyDown} />
            <button className={`${inputs.button} ${inputs.add}`}
                onClick={handleAdd}>
                Добавить
            </button>
        </div>
    )
}

export default AddTask;