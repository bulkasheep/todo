import { useState } from 'react';
import { useLocalStorage } from '../../localStorage';
import AddTask from '../../components/AddTask';
import Filter from '../../components/Filter';
import Task from '../../components/Task';
import styles from './styles.module.css';

function MainPage() {
    const [tasks, setTasks] = useLocalStorage();
    const [option, setOption] = useState("all");

    console.log("Rerender happens");

    const onAdd = (title) => {
        const keys = tasks.map((task) => task.key);
        const key = keys.length === 0 ? 0 : (Math.max(...keys) + 1);
        setTasks([...tasks, {
            key: key,
            title: title,
            isDone: false
        }]);
    };

    const onChange = (changedTask) => {
        setTasks(tasks.map((task) => changedTask.key === task.key ? changedTask : task));
    }

    const onDelete = (key) => {
        setTasks(tasks.filter((task) => task.key !== key));
    };

    const onOptionChange = (event) => {
        setOption(event.target.value);
    };

    const filteredTasks = tasks.filter(task => option === 'all' || String(task.isDone) === option);

    return (
        <>
            <AddTask onAdd={onAdd} />
            <div className={styles.container}>
                <span className={styles.heading}>Список задач</span>
                <section className={styles.panel}>
                    <ul className={styles.list}>
                        {filteredTasks.map(task => (
                            <li
                                key={task.key}
                                className={styles.list_item}>
                                <Task
                                    taskKey={task.key}
                                    isInList={true}
                                    onChange={onChange}
                                    onDelete={onDelete} />
                            </li>
                        ))}
                    </ul>
                    <section className={styles.filter}>
                        <Filter
                            option={option}
                            onChange={onOptionChange} />
                    </section>
                </section>
            </div>
        </>
    )
}

export default MainPage;