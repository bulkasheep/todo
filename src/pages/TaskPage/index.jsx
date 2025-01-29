import { useParams } from "react-router-dom";
import Task from "../../components/Task";
import ErrorPage from "../ErrorPage"
import { getStoredValue } from "../../localStorage";

function TaskPage() {
    const params = useParams();
    const key = parseInt(params.key);

    if (getStoredValue(key)) return <Task taskKey={key} />;
    return <ErrorPage />
}

export default TaskPage;