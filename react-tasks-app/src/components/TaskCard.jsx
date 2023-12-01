import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext); //con esta linea se accede al contexto y se almacena en una variable

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">title: {task.title}</h1>
      <p className="text-gray-500 text-sm">description:{task.description}</p>
      <button
        className=" bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        {" "}
        Eliminar Tarea
      </button>
      <br />
    </div>
  );
}

export default TaskCard;
