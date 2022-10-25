import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../../state/constants/actionTypes";

import Notes from "../Notes/Notes";
import Todos from "../Todo/Todos";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("profile"))?.token;
    if (!token) {
      navigate("/auth");
    } else {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        navigate("/auth");
      }
      setUser(decodedToken);
    }
  }, [navigate]);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand fs-4">
            DASH<b>BOARD</b>
          </span>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <span className="me-2 fs-5">
                Hello, <b>{user?.username}</b>
              </span>
              <button
                className="bg-primary rounded-pill px-3 py-2 text-white"
                style={{ textDecoration: "none", border: "none" }}
                onClick={handleLogout}
              >
                LOG OUT
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Notes />
        <Todos />
      </div>
    </>
  );
};

export default Home;
