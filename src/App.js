import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>Início</Link> </li>
          <li><Link to='/create'>Adicionar</Link></li>
          <li><Link to='/read'>Ler</Link> </li>
          <li><Link to='/update'>Atualizar</Link> </li>
          <li><Link to='/delete'>Remover</Link> </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/read/' element={<Read />}></Route>
        <Route path='/update/' element={<Update />}></Route>
        <Route path='/delete' element={<Delete />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;