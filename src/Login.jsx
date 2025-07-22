import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CONFIG from './config';
import { toast } from 'react-toastify';
import AnimatedStripesBackground from './AnimatedStripesBackground';
import AutoParticlesBackground from './AutoParticlesBackground';
import PatternBackground from './PatternBackground';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      toast.error('Email and password are required.');
      setError('Email and password are required.');
      return;
    }
    try {
      const response = await fetch(CONFIG.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, remember }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Login successful!');
        if (data.role === 'admin') {
          navigate('/admin');
        } else if (data.role === 'dealer') {
          navigate('/dealer');
        } else if (data.role === 'client') {
          navigate('/client');
        } else if (data.role === 'team') {
          navigate('/team');
        } else {
          // TODO: handle other roles
          toast.info('Login successful!');
        }
      } else {
        toast.error(data.message || 'Login failed');
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error('Server error. Please try again later.');
      setError('Server error. Please try again later.');
    }
  };

  return (
    <>
      <PatternBackground />
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card px-sm-6 px-0">
              <div className="card-body">
                <div className="app-brand justify-content-center mb-4">
                  <img src="/assets/img/brand-logo.png" alt="Drive Innovate Logo" style={{ height: 110, marginRight: 12 }} />
                  {/* <span className="app-brand-text demo text-heading fw-bold">Drive Innovate</span> */}
                </div>
                <h4 className="mb-1">Welcome to Drive! 👋</h4>
                <p className="mb-6">Please sign-in to your account and start the adventure</p>
                <form className="mb-4" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email or username"
                      autoFocus
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 form-password-toggle">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="••••••••••••"
                        aria-describedby="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="icon-base bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <div className="d-flex justify-content-between">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-me"
                          checked={remember}
                          onChange={e => setRemember(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                      </div>
                      <a href="/forgot-password">
                        <span>Forgot Password?</span>
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button className="btn btn-primary d-grid w-100" type="submit">Login</button>
                  </div>
                </form>
                <p className="text-center">
                  <span>New on our platform?</span>
                  <a href="#">
                    <span>Create an account</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
