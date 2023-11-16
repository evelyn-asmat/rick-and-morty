import axios from "axios";
import {useState} from 'react';
import './App.css';
import { Cards, Nav, About, Detail, Error} from './components';
import { Routes, Route } from 'react-router-dom';

const URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (characters.find(c => c.id === parseInt(id))){
      window.alert('¡Personaje ya agregado!');
      return;
    }
    axios(`${URL}/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
   );
  }

  const onClose = (id) => {
    setCharacters(characters.filter(c => c.id !== Number(id)));
  }

  const onClickRandom = () => {
    let random = Math.floor(Math.random() * 826) + 1;
    onSearch(random);
  }

  return (
    <>
      <div className='App'>
        <Nav onSearch={onSearch} onClickRandom={onClickRandom}/>
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="border-mask" x="0" y="0" width="100%" height="100%">
            <circle cx="50%" cy="50%" r="40%" fill="white" />
          </mask>
        </defs>
      </svg>
    </>
  )
}

export default App
