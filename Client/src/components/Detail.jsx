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
         }
      );
      return setCharacter({});
   }, [id]);

   if (character) {
      return (
         <div className="detail">
            <div>
               <h1 className="character-name">{character.name}</h1>
               <h2> <i className={`fa-solid fa-circle-dot fa-2xs color-${(character.status || '').toLowerCase()}`}></i> STATUS <i className="fa-solid fa-angle-right fa-xs fa-fade"></i> {character.status}</h2>
               <h2> <i className="fa-solid fa-users fa-sm color-icon"></i> SPECIES <i className="fa-solid fa-angle-right fa-xs fa-fade"></i> {character.species}</h2>
               <h2> <i className={`fa-solid fa-sm color-icon
                     ${(character.gender || '').toLowerCase() === 'genderless'? 'fa-genderless' : (
                        (character.gender || '').toLowerCase() === 'female'? 'fa-venus' : (
                           (character.gender || '').toLowerCase() === 'male'? 'fa-mars' : 'fa-question'))} `}></i>
                  &nbsp; GENDER <i className="fa-solid fa-angle-right fa-xs fa-fade"></i> {character.gender}
               </h2>
               <h2> <i className="fa-solid color-icon fa-location-dot fa-sm"></i> ORIGIN <i className="fa-solid fa-angle-right fa-xs fa-fade"></i> {character.origin && character.origin.name}</h2>
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
 