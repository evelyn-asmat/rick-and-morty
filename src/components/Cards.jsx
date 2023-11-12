import Card from './Card';

export default function Cards(props) {
   return (
      <div>
         {props.characters &&
            props.characters.map((character) => {
               return (
                  <Card
                     key={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     origin={character.origin.name}
                     image={character.image}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               )
            })
         }
      </div>
   );
}
