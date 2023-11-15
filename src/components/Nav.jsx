import SearchBar from './SearchBar';

export default function Nav(props) {
   return (
      <>
        <SearchBar onSearch={props.onSearch} />
        <button onClick={props.onClickRandom} >Random</button>
      </>
   );
}
