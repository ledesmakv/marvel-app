import React, { Fragment, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';
import logo from '../img/logo.png';
import icon from '../img/icon.svg';
import Card from './Card';

function SearchForm() {
  // TODO: poner todo esto en un archivo .env
  // API KEYS & HASH
  const API_KEY = `b43285bc0c36ac78352f600b259d6ccc`;
  const API_KEY_PRIVATE = `7ab455fbefd7667eeadb474bb044bfb76dfc47ee`;
  const ts = new Date().getTime();
  const HASH = md5(ts + API_KEY_PRIVATE + API_KEY);
  
  // instance para la URL base de la API de Marvel
  const instance = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/',
    headers: {
      'Content-type': 'application/json'
    }
  })
  
  // le pido a la API que me traiga el personaje
  const data = async(name) => {
    const resolve = await instance
    .get(
      `public/characters?ts=${ts}&apikey=${API_KEY}&hash=${HASH}&name=${name}`
    )
    setCharacter(resolve.data.data.results[0])
  }
  
  // creo el useState donde guardo lo que escribo
  const [input, setInput] = useState('');
  const [character, setCharacter] = useState({});

  // me traigo el contenido del input a mi setState
  const handleChange = e => {
    setInput(e.target.value);
  }

  let handleSubmit = e => {
    e.preventDefault();
    data(input);
  }

  return(
    <Fragment>
      <div className="container">
        <a href='/'>
          <img
            src={logo}
            alt="Marvel API"
            className="logo"
            />
        </a>
        <div className="formContainer">
          <img
            src={icon}
            alt="Search icon"
            className="icon"
            />
          <form
            type="submit"
            onSubmit={handleSubmit}
            >
            <input
              type="text"
              className="search-input"
              placeholder="Buscar"
              // Componentes controlados >:v
              onChange={handleChange}
              value={input}
              />
          </form>
        </div>
      </div>
      <Card
        character={character}
      />
    </Fragment>
  )
}

export default SearchForm;