import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const { tasks} = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> no hay tareas aun</h1>;
  } //se le manda la funcion delete task tambien como parametro
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}  />
        //    <div key={task.id}>
        //     <h1>id : {task.id}</h1>
        //   <p>title: {task.title}</p>
        //   <p>description:{task.description}</p>
        //   <br/>
        // </div>
      ))}
    </div>
  );
}

export default TaskList;
