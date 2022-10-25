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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(128deg, rgba(196,229,255,1) 0%, rgba(201,208,255,1) 100%)",
      }}
    >
      <div className="container d-flex vh-100 align-items-center justify-content-center white">
        <div className="col-lg-6 col-12 shadow p-5 bg-white">
          <h1 className="display-6 fw-bold text-center text-uppercase mb-3">
            {isLogin ? "Login" : "Register"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating my-2">
              <input
                id="username"
                name="username"
                className="form-control"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="username">Username</label>
            </div>
            {!isLogin && (
              <div className="form-floating my-2">
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="Email">Email</label>
              </div>
            )}
            <div className="form-floating my-2">
              <input
                id="password"
                name="password"
                className="form-control"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              className="btn btn-primary my-2 text-uppercase px-5 py-2"
              type="submit"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="link-primary"
            onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
            style={{
              cursor: "pointer",
              outline: "none",
              background: "none",
              border: "none",
            }}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
