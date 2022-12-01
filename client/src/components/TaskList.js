import { useContext } from "react";
import TaskContext from "../Contexts/TaskContext";
import TaskItem from "./TaskItem";


const TaskList = () => {
    const {tasks} = useContext(TaskContext)
    return (
        <ul>
            {tasks.map(x => <TaskItem
                key={x._id}
                title={x.title}
                taskId={x._id}

            />)}
        </ul>
    );
}

export default TaskList;