import styles from './styles.module.css';
import inputs from '../../inputs.module.css';
import filters from './constants';

function Filter({ option, onChange }) {

    return (
        <>
            <span className={styles.heading}>Статус</span>
            <ul className={styles.list}>
                {filters.map((filter) => {
                    return (
                        <li key={filter.value} className={styles.list_item}>
                            <input type="radio"
                                className={inputs.radiobutton}
                                name="status"
                                value={filter.value}
                                checked={option === filter.value}
                                id={filter.value}
                                onChange={onChange} />
                            <label htmlFor={filter.value}>
                                {filter.label}
                            </label>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Filter;