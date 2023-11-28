import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Nav(props) {
   return (
      <nav>
         <button>
            <NavLink to='/home'>Home</NavLink>
         </button>
         <button>
            <NavLink to='/about'>About</NavLink>
         </button>
         <button>
            <NavLink to='/favorites'>Favorites</NavLink>
         </button>
         <button onClick={props.onClickRandom}>Random</button>
         <SearchBar onSearch={props.onSearch} />
         <button onClick={props.logout}>Logout <i className="fa-solid fa-right-from-bracket"></i></button>
      </nav>
   );
}
