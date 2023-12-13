import Card from './Card';

export default function Cards(props) {
   return (
      <div className="cards">
         {props.characters && props.characters.length > 0 ? (
            props.characters.map((character) => {
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
            })
         ) : (
            <div className='box-center neon'>No characters added</div>
         )
         }
      </div>
   );
}
