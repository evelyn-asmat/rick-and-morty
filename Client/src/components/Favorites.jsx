import React, { useState } from 'react'
import { filterCards, orderCards } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import Card from './Card';

export default function Favorites(props) {
   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();

   // const [aux, setAux] = useState(false);    

   const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
      // setAux(!aux);
   }

   const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
   }
   
   return (
      <>
         <div className='filters'>
            <select name="order" onChange={handleOrder} >
               <option value="">----</option>
               <option value="A">Ascending</option>
               <option value="D">Descending</option>
            </select>
            <select name="filter" onChange={handleFilter} >
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>
         <div className='cards'>
            {myFavorites && myFavorites.length > 0 ? (
               myFavorites.map((character) => {
                  return (
                     <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin}
                        image={character.image}
                        onClose={props.onClose}
                     />
                  )
               })
               ) : (
                  <div className='box-center neon'>No favorites available</div>
               )
            }
         </div>
      </>
   )
}
