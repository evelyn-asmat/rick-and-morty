import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className="card">
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
