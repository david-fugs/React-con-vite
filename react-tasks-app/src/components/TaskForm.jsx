import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext'

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault(); //es para quitar la recarga de la pagina por el boton
     createTask({
      title,
      description,
     });
     setTitle('')
     setDescription('')
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea </h1>
        <input
          placeholder="Escribe tu tarea"
          // onChange={(e) => console.log(e.target.value)} aca es para mostrar por consola
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        >
        </input>
        <textarea className="bg-slate-300 p-3 w-full mb-2 "placeholder="Escribe descripcion de la tarea" onChange={e => setDescription(e.target.value)} value={description}/>

        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
