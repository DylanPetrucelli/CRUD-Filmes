import axios from 'axios';
import React, { useState } from 'react';
import './Read.css';

function Read() {
    const [data, setData] = useState(null);
    const [id, setId] = useState('');
    let getFilme = (null);


    const handleSearch = (x) => {
        x.preventDefault();

        axios.get(`https://671fa22ae7a5792f052efa4b.mockapi.io/Movies/${id}`)
        .then((res) => {setData(res.data)})
        .catch((err) => {
            console.error(err);
            alert("Filme não encontrado!");
        })

    };

    if (data != null) {
        getFilme = (
            <div>
                <h1>Nome do filme: {data.nome}</h1>
                <h2>Ano de lançamento: {data.ano}</h2>
                <h2>Genero: {data.genero}</h2>
            </div>
        );
    }
    /*else{
      alert("Filme não encontrado!");
    }*/
    
    return (
        <div>
            <form onSubmit={handleSearch}>
                <h1>Ler informações</h1>
                <input 
                    type="text"
                    value={id}
                    placeholder='Digite o ID do filme...'
                    onChange={(x) => setId(x.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {getFilme}
        </div>
    )
}
export default Read;