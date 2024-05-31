import React from "react";
import { Link, Outlet } from "react-router-dom";
import { appPostingBaseName } from "../constants/prefix";

export default function Layout() {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <span>Career UP</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`${appPostingBaseName}`}>포스팅홈</Link>
            </li>
            <li>
              <Link to={`${appPostingBaseName}/1`}>포스팅_1</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
