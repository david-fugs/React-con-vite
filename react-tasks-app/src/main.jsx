import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {TaskContextProvider} from './context/TaskContext.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Se pone dentro del provider para que el app este contenido y este pueda pasar la infromacion directa sin tener que hacer tantas escaleras */}
    <TaskContextProvider> 
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
