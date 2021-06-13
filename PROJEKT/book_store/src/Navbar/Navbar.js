import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
const Navbar = ({ setBurger, isMain }) => {
  const [toggleState, setToggleState] = useState(false);
  const history = useHistory();
  const backHandle = () => {
    history.goBack();
  };
  return (
    <div className="navbar">
      <ul>
        <div>
          <img onClick={backHandle} src="return.png" width="32px"></img>
          <li onClick={backHandle}>RETURN</li>
        </div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div>
            <li>HOME</li>
            <img src="home.png" width="32px"></img>
          </div>
        </Link>
        <Link to={`/create`} style={{ textDecoration: "none" }}>
          <li>ADD BOOKS</li>
          <img src="addbook.png" width="32px"></img>
        </Link>
      </ul>
      <div className="navbar-logo">
        <h1 className="navbar-name1">Book</h1>
        <h1 className="navbar-name2">Store</h1>
      </div>
      {isMain ? (
        <img
          onClick={() => {
            setBurger(!toggleState);
            setToggleState(!toggleState);
          }}
          className="menuButton"
          src="menu.png"
          width="32px"
          height="32px"
        ></img>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Navbar;
