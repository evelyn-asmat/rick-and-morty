import './App.css';

import { About, Cards, Detail, Error, Favorites, Form, Nav } from './components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from "axios";
import { removeFav } from './redux/actions'
import { useDispatch } from 'react-redux';

const URL = "http://localhost:3001/rickandmorty/character";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const dispatch = useDispatch();

  const onSearch = async (id) => {
    try {
      if (characters.find(c => c.id === parseInt(id))){
        window.alert('¡Character already exists!');
        return;
      }
      const { data } = await axios(`${URL}/${id}`);
      setCharacters((oldChars) => [...oldChars, data]);
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
      
  }

  const onClose = (id) => {
    setCharacters(characters.filter(c => c.id !== Number(id)));
    dispatch(removeFav(id));
  }

  const onClickRandom = () => {
    let random = Math.floor(Math.random() * 826) + 1;
    onSearch(random);
  }

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      setAccess(data.access);
      data.access ? navigate('/home'): alert("Invalid credentials");
    } catch (error) {
      alert(error.message);
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
          <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
