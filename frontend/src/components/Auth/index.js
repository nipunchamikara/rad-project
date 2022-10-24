import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../state/actions";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData, navigate));
    } else {
      dispatch(register(formData, navigate));
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(128deg, rgba(196,229,255,1) 0%, rgba(201,208,255,1) 100%)",
      }}
    >
      <div className="container d-flex vh-100 align-items-center justify-content-center white">
        <div className="col-lg-6 col-12 shadow-sm p-5 bg-white">
          <h1 className="display-6 fw-bold text-center text-uppercase mb-3">
            {isLogin ? "Login" : "Register"}
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            {!isLogin && (
              <input
                className="form-control my-2"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            )}
            <input
              className="form-control my-2"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              className="btn btn-primary my-2 text-uppercase"
              type="submit"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            className="link-primary"
            onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
            style={{ cursor: "pointer" }}
          >
            {isLogin ? "Register" : "Login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
