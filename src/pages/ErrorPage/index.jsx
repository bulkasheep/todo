import { Link } from "react-router-dom";
import styles from './styles.module.css';

function ErrorPage() {
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

export default ErrorPage;