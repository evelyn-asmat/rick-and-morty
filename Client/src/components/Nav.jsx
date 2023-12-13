import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav(props) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <button>
          <NavLink to="/home">Home</NavLink>
        </button>
        <button>
          <NavLink to="/about">About</NavLink>
        </button>
        <button>
          <NavLink to="/favorites">Favorites</NavLink>
        </button>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
        <button onClick={props.onClickRandom}>Random</button>
      </div>
      <div>
        <button onClick={props.logout}>
          Logout <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </nav>
  );
}
