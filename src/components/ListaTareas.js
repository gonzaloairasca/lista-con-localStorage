import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Tareas from "./Tareas";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (tarea) => {
    if (!tarea.text || /^\s*$/.test(tarea.text)) {
      return;
    }
    const nuevasTareas = [tarea, ...tareas];
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = [...tareas].filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const actualizacionTarea = (tareaId, newValue) => {
    setTareas((prev) =>
      prev.map((item) => (item.id === tareaId ? newValue : item))
    );
  };
  const tareaCompletada = (id) => {
    let actTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.isComplete = !tarea.isComplete;
      }
      return tarea;
    });
    setTareas(actTareas);
  };

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data != null) {
      setTareas(JSON.parse(data));
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div>
      <Formulario onSubmit={agregarTarea} />
      <Tareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        actualizacionTarea={actualizacionTarea}
        tareaCompletada={tareaCompletada}
      />
    </div>
  );
}

export default ListaTareas;
