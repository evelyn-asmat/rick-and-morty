import axios from "axios";
import {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (characters.find(c => c.id === parseInt(id))){
      window.alert('¡Personaje ya agregado!');
      return;
    }
    // axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-evelyn-asmat`).then(
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
    setCharacters(characters.filter(c => c.id !== id));
  }

  const onClickRandom = () => {
    let random = Math.floor(Math.random() * 826) + 1;
    onSearch(random);
  }

  return (
    <>
      <div className='App'>
        <Nav onSearch={onSearch} onClickRandom={onClickRandom}/>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </>
  )
}

export default App
