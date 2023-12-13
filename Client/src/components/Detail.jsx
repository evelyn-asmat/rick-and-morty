import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const URL_ANTIGUA = "https://rickandmortyapi.com/api/character";
const URL = "http://localhost:3001/rickandmorty/character";

export default function Detail() {
   const {id} = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`${URL}/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
            document.getElementById('spinner').style.display = 'none';
            document.getElementById('detail-data').style.display = 'block';
         }
      ); 
      return setCharacter({});
   }, [id]);

   if (character) {
      return (
         <div className="detail neon">
            <div id="spinner" className="fa-3x">
               <i className="fa-solid fa-spinner fa-spin-pulse"></i>
            </div>
            <div id="detail-data">
               <h1 className="character-name">{character.name}</h1>
               <h2>
                  <span className="property">STATUS</span>
                  <i className="fa-solid fa-angle-right fa-xs fa-fade"></i>
                  <i className={`fa-solid fa-circle-dot fa-2xs color-${(character.status || '').toLowerCase()}`}></i>&nbsp;
                  {character.status}
               </h2>
               <h2>
                  <span className="property">SPECIES</span>
                  <i className="fa-solid fa-angle-right fa-xs fa-fade"></i>
                  <i className="fa-solid fa-users fa-sm color-icon"></i>&nbsp;
                  {character.species}
               </h2>
               <h2>
                  <span className="property">GENDER</span>
                  <i className="fa-solid fa-angle-right fa-xs fa-fade"></i>
                  <i className={`fa-solid fa-sm color-icon
                     ${(character.gender || '').toLowerCase() === 'genderless'? 'fa-genderless' : (
                        (character.gender || '').toLowerCase() === 'female'? 'fa-venus' : (
                           (character.gender || '').toLowerCase() === 'male'? 'fa-mars' : 'fa-question'))} `}></i>&nbsp;
                  {character.gender}
               </h2>
               <h2>
                  <span className="property">ORIGIN</span>
                  <i className="fa-solid fa-angle-right fa-xs fa-fade"></i>
                  <i className="fa-solid color-icon fa-location-dot fa-sm"></i> &nbsp;
                  {character.origin && character.origin.name}
               </h2>
            </div>
            <div className="wrap-img">
               <img src={character.image} className='character-img'/>
            </div>
         </div>
      );
   } else {
      return (
         <>
            No se pudo cargar el personaje
         </>
      )
   }
 }
 