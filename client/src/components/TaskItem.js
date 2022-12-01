import { useEffect } from "react";

const TaskItem = ({
    title,
    taskDeleteHandler,
    taskId,
}) => {
    useEffect(() => {
        console.log('Mount');

        return () => { //tozi komponent se izpulnqva kogato mahnem dannite ot componenta i go maha ot DOM durvoto
            console.log('Unmount');
        }
    }, []);

    return (
        <li>
            {title}
            <button onClick={() => taskDeleteHandler(taskId)}>x</button>
        </li>
    );
}

export default TaskItem;