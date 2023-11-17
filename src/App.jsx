import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import { About, Cards, Detail, Error, Form, Nav} from './components';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const URL = "https://rickandmortyapi.com/api/character";
const EMAIL = "evelyn.asmat@gmail.com";
const PASSWORD = "evelyn09";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

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

  const login = (userData, setUserData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate("/home");
    } else {
      setUserData({ ...userData, password: ""});
      alert("Credenciales incorrectas");
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <>
      <div className='App'>
        {
          (location.pathname !== "/")
          ? <Nav onSearch={onSearch} onClickRandom={onClickRandom} logout={logout}/>
          : null
        }
        
        <Routes>
          <Route path="/" element={<Form login={login}/>} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
