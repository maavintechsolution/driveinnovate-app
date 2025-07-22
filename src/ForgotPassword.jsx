import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AnimatedStripesBackground from './AnimatedStripesBackground';
import AutoParticlesBackground from './AutoParticlesBackground';
import PatternBackground from './PatternBackground';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Email is required.');
      setError('Email is required.');
      setMessage('');
      return;
    }
    setError('');
    // TODO: Add API call to send reset link
    toast.success('If this email exists, instructions to reset your password have been sent.');
    setMessage('If this email exists, instructions to reset your password have been sent.');
  };

  return (
    <>
      <PatternBackground />
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card px-sm-6 px-0">
              <div className="card-body">
                <div className="app-brand justify-content-center mb-6">
                  
                  <span className="app-brand-text demo text-heading fw-bold">Drive Innovate</span>
                </div>
                <h4 className="mb-1">Forgot Password? 🔒</h4>
                <p className="mb-6">Enter your email and we'll send you instructions to reset your password</p>
                <form className="mb-6" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      autoFocus
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary d-grid w-100" type="submit">Send Reset Link</button>
                </form>
                {message && <div className="alert alert-success text-center mb-4">{message}</div>}
                <div className="text-center">
                  <button className="d-flex justify-content-center btn btn-link" onClick={() => navigate('/')}> <i className="icon-base bx bx-chevron-left me-1"></i>Back to login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
