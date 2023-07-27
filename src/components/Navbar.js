import React, { Component } from "react";
 
import {Link} from "react-router-dom";


export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <ul className="nav justify-content-center my-3 text-black">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled">More</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
