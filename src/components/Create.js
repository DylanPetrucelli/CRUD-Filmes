import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

function Create() {
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");
    const navigate = useNavigate("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            nome: nome,
            genero: genero,
            ano: ano
        };

        axios.post('https://671fa22ae7a5792f052efa4b.mockapi.io/Movies', newMovie)
            .then(() => {
                alert("Filme adicionado!");
                setNome("");
                setGenero("");
                setAno("");
                navigate("/");
            })
            .catch((err) => console.error("Falha ao adicionar filem.", err));
    };

    return (
        <div className='createDiv'>
            <h1>Adicionar Filme</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </label>
                <label>Gênero:
                    <input
                        type="text"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        required
                    />
                </label>
                <label>Ano:
                    <input
                        type="number"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Adicionar Filme</button>
            </form>
        </div>
    )
}

export default Create;