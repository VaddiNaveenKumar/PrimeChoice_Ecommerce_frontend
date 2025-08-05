import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './assets/styles.css';

// A better way to handle environment-specific variables

export default function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:9090/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, role }),
      });
      
      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        // Navigate to the login page after successful registration
        navigate('/');
      } else {
        // Handle API errors
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      // Handle network errors
      setError(err.message || 'An unexpected error occurred.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="login-root-container">
      <div className="login-box">
        <div className="login-left">
          <div className="form-container">
            <h1 className="form-title">Create an Account</h1>
            {error && (
                <p className="error-message" role="alert" aria-live="assertive">
                    {error}
                </p>
            )}
            <form onSubmit={handleSignUp} className="form-content">
              <div className="form-group">
                <label htmlFor="username-input" className="form-label">Username</label>
                <input
                  id="username-input"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-input"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-input" className="form-label">Email</label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password-input" className="form-label">Password</label>
                <input
                  id="password-input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-input"
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role-select" className="form-label">Role</label>
                <select
                  id="role-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="form-input"
                  disabled={loading}
                >
                  <option value="" disabled>Select your role</option>
                  <option value="CUSTOMER">Customer</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              <button type="submit" className="form-button" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>
            <p className="form-footer">
              Already a user?{' '}
              <Link to="/" className="form-link">Log in here</Link>
            </p>
          </div>
        </div>
        <div className="login-right">
          <img
            src="../public/login-illustration.png"
            alt="An illustration of a shopping cart with product boxes"
            className="login-illustration"
          />
        </div>
      </div>
    </div>
  );
}