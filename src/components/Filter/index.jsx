import styles from './styles.module.css';
import inputs from '../../inputs.module.css';

function Filter({ option, onChange }) {

    return (
        <>
            <span className={styles.heading}>Статус</span>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <input type="radio"
                        className={inputs.radiobutton}
                        name="status"
                        value="all"
                        id="all"
                        checked={option === "all"}
                        onChange={onChange} />
                    <label htmlFor="all">
                        Все
                    </label>
                </li>
                <li className={styles.list_item}>
                    <input type="radio"
                        className={inputs.radiobutton}
                        name="status"
                        value="false"
                        checked={option === "false"}
                        id="active"
                        onChange={onChange} />
                    <label htmlFor="active">
                        Активные
                    </label>
                </li>
                <li className={styles.list_item}>
                    <input type="radio"
                        className={inputs.radiobutton}
                        name="status"
                        value="true"
                        checked={option === "true"}
                        id="unfinished"
                        onChange={onChange} />
                    <label htmlFor="unfinished">
                        Завершённые
                    </label>
                </li>
            </ul>
        </>
    )
}

export default Filter;