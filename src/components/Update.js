import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [data, setData] = useState(null);
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    let updateFilme = (null);
    
    const handleSearch = (x) => {
        x.preventDefault();

        axios.get(`https://671fa22ae7a5792f052efa4b.mockapi.io/Movies/${id}`)
        .then((res) => {setData(res.data)})
        .catch((err) => {
            console.error(err);
            alert("Filme não encontrado!");
        })

    };

    function handleUpdate(y){
        y.preventDefault();
        
        axios.put(`https://671fa22ae7a5792f052efa4b.mockapi.io/Movies/${id}`, {
          nome,
          genero,
          ano
        }).then(() => {
          navigate("/");
        }).catch((err) => {
          console.error(err);
          alert("An error has occurred while updating! Changes were not made.")
        });
      }

      if (data != null) {
        updateFilme = (
          <form className="modern-form" onSubmit={handleUpdate}>
            <label>Nome:</label>
            <input 
              type="text" 
              placeholder={data.nome}
              value={nome} 
              onChange={(x) => setNome(x.target.value)} 
              required 
            />
    
            <label>Genero:</label>
            <input
              type="text" 
              placeholder={data.genero}
              value={genero} 
              onChange={(x) => setGenero(x.target.value)} 
              required 
            />
    
            <label>Ano de lançamento:</label>
            <input
              type="number" 
              value={ano} 
              placeholder={data.ano}
              onChange={(x) => setAno(x.target.value)} 
              required 
            />
    
            <button type="submit">Atualizar info.</button>
          </form>
        );
      }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <h1>Atualizar informações</h1>
                <input 
                    type="text"
                    value={id}
                    placeholder='Digite o ID do filme...'
                    onChange={(x) => setId(x.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {updateFilme}
        </div>
    )
}
export default Update