import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/styles.css"; // Ensure this has the required styles

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.role === "CUSTOMER") {
          navigate("/customerhome");
        } else if (data.role === "ADMIN") {
          navigate("/adminhome");
        } else {
          navigate("/");
        }
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-root-container">
      <div className="login-box">
        {/* Left - Login Form */}
        <div className="login-left">
          <div className="login-form-container">

            <p className="login-welcome-message">Welcome back !!!</p>
            <h2 className="login-title">Sign in</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSignIn} className="login-form">
              <input
                className="login-input"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                disabled={loading}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                disabled={loading}
              />
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
            <div className="login-footer">
              <span>Don't have an account? </span>
              <Link to="/register" className="login-link">Sign up</Link>
            </div>
          </div>
        </div>
        {/* Right - Illustration/Image */}
        <div className="login-right">
          {/* Replace src with any illustration/image you like */}
          <img
            src="../login-illustration.png"
            alt="Shopping cart illustration"
            className="login-illustration"
          />
        </div>
      </div>
    </div>
  );
}
