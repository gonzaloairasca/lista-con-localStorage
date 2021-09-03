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
    <form onSubmit={handleSubmit} className="todo-form">
      {props.editar ? (
        <>
          <input
            className="todo-input edit"
            placeholder="aca pones lo que tenes k aser"
            onChange={handleChange}
            value={input}
          />
          <button className="todo-button edit">EDITAR</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            placeholder="aca pones lo k tenes que aser"
            onChange={handleChange}
            value={input}
          />
          <button className="todo-button">AGREGAR</button>
        </>
      )}
    </form>
  );
}

export default Formulario;
