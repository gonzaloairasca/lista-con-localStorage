import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import Formulario from "./Formulario";

function Tareas({
  tareas,
  eliminarTarea,
  actualizacionTarea,
  tareaCompletada,
}) {
  const [editar, setEditar] = useState({
    id: null,
    value: "",
  });

  const actualizarTarea = (value) => {
    actualizacionTarea(editar.id, value);
    setEditar({
      id: null,
      value: "",
    });
  };

  if (editar.id) {
    return <Formulario editar={editar} onSubmit={actualizarTarea} />;
  }

  return tareas.map((tarea, index) => (
    <div key={index} className={tarea.isComplete ? "complete" : ""}>
      <div key={tarea.id} onClick={() => tareaCompletada(tarea.id)}>
        {tarea.text}
      </div>

      <div className="iconos">
        <AiOutlineCloseCircle onClick={() => eliminarTarea(tarea.id)} />
        <AiOutlineEdit
          onClick={() => setEditar({ id: tarea.id, value: tarea.text })}
        />
      </div>
    </div>
  ));
}

export default Tareas;
