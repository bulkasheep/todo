import { getStoredValue, removeStoredValue } from '../../localStorage';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import inputs from '../../inputs.module.css';
import { useState } from 'react';


function Task({ taskKey, isInList = false, onChange, onDelete }) {
    const storedValue = getStoredValue(taskKey);
    const [data, setData] = useState(storedValue);

    const handleChange = (event) => {
        const changedTask = {
            ...data,
            isDone: event.target.checked
        };
        onChange(changedTask);
        setData(changedTask);
    };

    const handleDelete = () => {
        if (isInList) onDelete(data.key);
        else removeStoredValue(data.key);
    };

    if (isInList) {
        return (
            <>
                <input type="checkbox"
                    checked={data.isDone}
                    className={inputs.checkbox}
                    onChange={handleChange} />
                <Link to={`/${data.key}`}
                    className={styles.title}>
                    {data.title}
                </Link>
                <button className={`${inputs.button} ${inputs.delete}`}
                    onClick={handleDelete} />
            </>
        );
    }
    return (
        <div className={styles.container}>
            <Link to="/"
                className={`${inputs.button} ${inputs.back}`}>
                Назад
            </Link>
            <span className={styles.title}>
                {data.title}
            </span>
            <Link to="/"
                className={`${inputs.button} ${inputs.delete}`}
                onClick={handleDelete} />
        </div>
    );
}

export default Task;