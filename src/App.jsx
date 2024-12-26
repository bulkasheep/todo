import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AddTask from './components/AddTask';
import Task from './components/Task';
import Filter from './components/Filter';
import styles from './styles.module.css';
import './App.css';

let nextID = 0;
// Все-все задачи будут храниться в localStorage.
// Если там нет tasks - создаёт
if (!localStorage.tasks) {
  localStorage.tasks = JSON.stringify([
    {
      id: 0,
      title: "Запустить сервер на Aternos",
      isDone: true
    },
    {
      id: 1,
      title: "Дождаться подругу в игре",
      isDone: true
    },
    {
      id: 2,
      title: "Лечь спать",
      isDone: false
    }
  ]);
}

let list = JSON.parse(localStorage.tasks);
// Небольшой код для поиска следующего ID,
// чтобы избежать повторяющихся значений
for (let t in list) {
  nextID = list[t].id >= nextID ? (list[t].id + 1) : nextID;
}

function App() {
  const [tasks, setTasks] = useState(list);
  const [option, setOption] = useState("all");

  const filterByOption = (opt) => {
    let filtered;

    switch (opt) {
      case "all":
        filtered = list;
        break;
      default:
        filtered = list.filter((task) => ('' + task.isDone) === opt);
        break;
    }

    setTasks(filtered);
  };

  const onTaskAdding = (title) => {
    list = [...list, {
      id: nextID,
      title: title,
      isDone: false
    }];
    localStorage.tasks = JSON.stringify(list);
    nextID += 1;
    filterByOption(option);
  };

  const onTaskChanging = (task) => {
    list = list.map(t => t.id === task.id ? task : t);
    filterByOption(option);
  };

  const onTaskDeleting = (id) => {
    deleteTask(id);
    filterByOption(option);
  };

  const onOptionChange = (event) => {
    setOption(event.target.value);
    filterByOption(event.target.value);
  };

  return (
    <>
      <AddTask onAdding={onTaskAdding} />
      <div className={styles.container}>
        <span className={styles.heading}>Список задач</span>
        <section className={styles.panel}>
          <ul className={styles.list}>
            {tasks.map(task => (
              <li
                key={task.id}
                className={styles.list_item}>
                <Task
                  task={task}
                  isInList={true}
                  onChange={onTaskChanging}
                  onDeleting={onTaskDeleting} />
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

function deleteTask(id) {
  list = list.filter((t) => t.id !== id);
  localStorage.tasks = JSON.stringify(list);
}

function TaskPage() {
  const navigate = useNavigate();
  const params = useParams();
  const id = parseInt(params.id);
  const task = list.find((t) => t.id === id);

  const onDeleting = (id) => {
    deleteTask(id);
    navigate("/");
  }

  if (task) {
    return <Task
      task={task}
      onDeleting={onDeleting} />
  }
  // Если перейти по ссылке с несуществующей задачей
  // (или из-за ошибки она не была найдена)
  // Будет отображаться такое сообщение
  return <Link
    to="/"
    className={styles.error}>
    {`( O ^ O )`}
    <br />
    Ты куда жмал? Вернись и нажми нормально
    <br />
    <br />
    <br />
    {`<-`}
  </Link>
}

export { App, TaskPage };
