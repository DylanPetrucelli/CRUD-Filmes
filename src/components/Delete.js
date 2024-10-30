import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");
  const navigate = useNavigate();


  function handleDelete(x){
    x.preventDefault();

    axios.delete(`https://671fa22ae7a5792f052efa4b.mockapi.io/Movies/${id}`)
      .then(() => { navigate("/") })
      .catch((err) => {
        console.error(err);
        alert("Id não encontrado");
      });
  }

  return (
    <div>
      <form onSubmit={handleDelete}>
        <h1>Deletar filme</h1>
        <input
          type="text"
          value={id}
          placeholder="Digite o ID do filme..."
          onChange={(x) => setId(x.target.value)}
          required
        />
        <button type="submit">Deletar</button>
      </form>
    </div>
  );
}

export default Delete;