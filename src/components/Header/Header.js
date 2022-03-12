import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          Navbar
        </Link> */}

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active danger" aria-current="page" to="/">
              Movies
            </Link>
            <Link className="nav-link" to="/Favourites">
              Favourites
            </Link>
            <Link className="nav-link" to="/LoginFormik">
              LoginFormik
            </Link>
            <Link className="nav-link" to="/Register">
              Register
            </Link>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
