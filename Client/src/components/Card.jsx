import { addFav, removeFav } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export default function Card(props) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   // Desafio:
   // useEffect(() => {
   //    for (let i = 0; i < myFavorites.length; i++) {
   //       if (myFavorites[i].id === props.id) {
   //          setIsFav(true);
   //       }
   //    }
   // }, [myFavorites]);

   document.addEventListener('DOMContentLoaded', function () {
      var filtersContainer = document.querySelector('.filters');
      var cardsContainer = document.querySelector('.cards');
      var cardCount = cardsContainer.querySelectorAll('.card').length;

      if (cardCount < 5) {
        filtersContainer.style.marginTop = '20px';
      }
   });

   return (
      <div className="card">
         {
            isFav ? (
               <button className="btn fav-btn" onClick={handleFavorite}><i className="fa-solid fa-heart fa-beat" style={{'--fa-beat-scale': '1.4'}}></i></button>
            ) : (
               <button className="btn fav-btn" onClick={handleFavorite}><i className="fa-regular fa-heart fa-lg"></i></button>
            )
         }
         <button className="btn close-btn" onClick={() => props.onClose(props.id)}><i className="fa-solid fa-xmark fa-lg"></i></button>
         <Link to={`/detail/${props.id}`} className="character-name">
            <div className='wrap-img'>
               <img src={props.image} alt='' className="character-img"/>
            </div>
            <h2>{props.name}</h2>
         </Link>
         <p>
            <i className={`fa-solid fa-circle-dot fa-2xs color-${props.status.toLowerCase()}`}></i> {props.status} | &nbsp;
            <i className={`fa-solid fa-sm
               ${props.gender.toLowerCase() === 'genderless'? 'fa-genderless' : (
                  props.gender.toLowerCase() === 'female'? 'fa-venus' : (
                     props.gender.toLowerCase() === 'male'? 'fa-mars' : 'fa-question'))} `}></i> {props.gender}</p>
         <p><b><i className="fa-solid fa-location-dot fa-sm"></i> {props.origin}</b></p>
      </div>
   );
}
