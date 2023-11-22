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

   return (
      <div className="card">
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className="close-btn" onClick={() => props.onClose(props.id)}>X</button>
         <div className='wrap-img'>
            <img src={props.image} alt='' className="character-img"/>
         </div>
         <Link to={`/detail/${props.id}`} className="character-name">
            <h2>{props.name}</h2>
         </Link>
         <p>{props.status} | {props.gender}</p>
         <p><b>{props.origin}</b></p>
      </div>
   );
}
