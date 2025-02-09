import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../redux/slices/authSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        // Dispatch loginSuccess with user details
        dispatch(
          loginSuccess({
            username: data.uname, // Extracting `uname` as the username
            role: data.role, // Extracting user role
            email: data.email,
            uid: data.uid,
          })
        );

        // Redirect based on role
        switch (data.role) {
          case 'Admin':
            navigate('/admin');
            break;
          case 'Customer':
            navigate('/customer');
            break;
          case 'Insurer':
            navigate('/insurer');
            break;
          default:
            setErrorMessage('Role not recognized. Please contact support.');
            dispatch(loginFailure('Role not recognized. Please contact support.'));
        }
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid email or password.');
        dispatch(loginFailure(errorData.message || 'Invalid credentials'));
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setErrorMessage('Something went wrong. Please try again later.');
      dispatch(loginFailure('Something went wrong. Please try again later.'));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <Shield className="text-primary" style={{ width: '40px', height: '40px' }} />
            <h3 className="mt-3">Insurance Hub</h3>
            <p className="text-muted">Secure your future with us</p>
          </div>

          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>

          <div className="mt-3 text-center">
            <p className="text-muted">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
