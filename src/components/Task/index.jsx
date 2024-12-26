
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import inputs from '../../inputs.module.css';

function Task({ task, isInList = false, onChange, onDeleting }) {
    const [data, setData] = useState({ ...task });

    const handleChanging = (event) => {
        const t = {
            ...data,
            isDone: event.target.checked
        };
        setData(t);
        onChange(t);
    };

    const handleDeleting = () => {
        onDeleting(data.id);
    };

    if (isInList) {
        return (
            <>
                <input type="checkbox"
                    checked={data.isDone}
                    className={inputs.checkbox}
                    onChange={handleChanging} />
                <Link to={`/${data.id}`}
                    className={styles.title}>
                    {data.title}
                </Link>
                <button className={`${inputs.button} ${inputs.delete}`}
                    onClick={handleDeleting} />
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
            <button className={`${inputs.button} ${inputs.delete}`}
                onClick={handleDeleting} />
        </div>
    );
}

export default Task;