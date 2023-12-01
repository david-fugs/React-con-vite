import { createContext, useState, useEffect } from "react";
export const TaskContext = createContext();
import { tasks as data } from "../data/tasks";

export function TaskContextProvider(props) {
  let x = 20;
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    //recibe el id del elemento del onclick
    setTasks(tasks.filter((task) => task.id !== taskId)); //esto se hace para que cuando quede false wse quite del arreglo que devuelve  y se pone como estado
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
