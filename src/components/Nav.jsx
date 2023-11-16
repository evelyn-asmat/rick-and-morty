import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
   return (
      <>
         <button>
            <NavLink to='/home'>Home</NavLink>
         </button>
         <button>
            <NavLink to='/about'>About</NavLink>
         </button>
         <SearchBar onSearch={props.onSearch} />
         <button onClick={props.onClickRandom}>Random</button>
      </>
   );
}
