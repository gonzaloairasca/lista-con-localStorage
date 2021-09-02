import React, { useState } from "react";

function Formulario(props) {
  const [input, setInput] = useState(props.editar ? props.editar.value : "");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="agrega tu tarea"
        onChange={handleChange}
        value={input}
      />
      <button>AGREGAR</button>
    </form>
  );
}

export default Formulario;
