import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className="card">
         <button className="close-btn" onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.status}</h2>
         <Link to={`/detail/${props.id}`}>
            <h2 className="card-name">{props.name}</h2>
         </Link>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <div className='wrap-img'>
            <img src={props.image} alt='' className="character-img"/>
         </div>
      </div>
   );
}
