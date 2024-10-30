import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://671fa22ae7a5792f052efa4b.mockapi.io/Movies/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []
    );

    

    return (
        <div className='full'>
            <h1>Catálogo</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Genero</th>
                        <th>Ano</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x) => (
                            <tr key={x.id}>
                                <td>{x.nome}</td>
                                <td>{x.genero}</td>
                                <td>{x.ano}</td>
                                <td>{x.id}</td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Home