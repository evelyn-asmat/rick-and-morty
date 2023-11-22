import Card from './Card';
import React from 'react'
import { useSelector } from 'react-redux'

export default function Favorites(props) {
   const myFavorites = useSelector(state => state.myFavorites);
   
   return (
      <div className='cards'>
         {myFavorites && myFavorites.map((character) => {
            return (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={props.onClose}
               />
            )
         })}
      </div>
   )
}
