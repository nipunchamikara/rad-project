import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../state/constants/actionTypes";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (!user) {
      navigate("/auth");
    } else {
      const decodedToken = JSON.parse(atob(user.token.split(".")[1]));
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        navigate("/auth");
      }
      setUser(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#">
            DASH<b>BOARD</b>
          </a>
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
      <div className="container"></div>
    </>
  );
};

export default Home;
