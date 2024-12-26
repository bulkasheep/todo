import { useState } from 'react';
import styles from './styles.module.css';
import inputs from '../../inputs.module.css';

function AddTask({ onAdding }) {
    const [title, setTitle] = useState("");

    const handleAdding = () => {
        onAdding(title);
        setTitle("");
    }

    return (
        <div className={styles.container}>
            <span className={styles.text}>
                Новая задача
            </span>
            <input type="text"
                value={title}
                className={inputs.input}
                onChange={e => setTitle(e.target.value)} onKeyDown={(event) => {
                    if (event.key === "Enter" && title !== "") handleAdding();
                }} />
            <button className={`${inputs.button} ${inputs.add}`}
                onClick={handleAdding}>
                Добавить
            </button>
        </div>
    )
}

export default AddTask;