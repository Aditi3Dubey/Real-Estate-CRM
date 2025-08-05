import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './Auth.css'; // Optional: For custom styling if needed
import loginImage from '../assests/loginImage.png'

const AuthPage = () => {
  const [activeScreen, setActiveScreen] = useState('login'); // 'login', 'register', 'forgot-email', 'forgot-otp'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',    
    otp: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

 const handleLogin = () => {
  if (
    formData.email === "Eddie@outlook.com" &&
    formData.password === "12345678"
  ) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/";
  } else {
    alert("Password is incorrect.");
  }
};


  return (
    <div className="flex min-h-screen">
      {/* Left side image */}
      <div className="w-1/2 bg-[#fff5f3] hidden lg:flex items-center justify-center">
        <img
          src={loginImage}          alt="dashboard preview"
          className="max-w-[90%] h-auto"
        />
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-[#fff] to-[#fff6f2] p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2 text-center">
            <span className="text-[#FF4D00] text-4xl font-bold tracking-wide">ne<span className="text-black">X</span>us</span>
          </h2>

          {activeScreen === 'login' && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-center">Login</h3>
              <p className="text-center text-gray-500 mb-6">Enter your credentials to access your account.</p>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-box"
              />
              <div className="relative mb-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="input-box pr-10"
                />
                <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePassword}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="text-sm">
                  <input type="checkbox" className="mr-1" /> Remember me
                </label>
                <button className="text-sm text-[#FF4D00]" onClick={() => setActiveScreen('forgot-email')}>
                  Forgot Password?
                </button>
              </div>

              <button className="primary-button" onClick={handleLogin}>Login</button>
              <p className="text-center text-sm mt-4">
                Need an account?{' '}
                <span className="text-[#FF4D00] cursor-pointer" onClick={() => setActiveScreen('register')}>
                  Register here
                </span>
              </p>
            </>
          )}

          {activeScreen === 'register' && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-center">Create Your Account</h3>
              <p className="text-center text-gray-500 mb-6">Register to manage and track your listings.</p>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="input-box" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-box" />
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="input-box" />
              <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="input-box" />
              <button className="primary-button" onClick={() => setActiveScreen('login')}>Register</button>
            </>
          )}

          {activeScreen === 'forgot-email' && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-center">Forgot Password</h3>
              <p className="text-center text-gray-500 mb-6">We've sent a 6-digit code to your registered email</p>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-box" />
              <button className="primary-button" onClick={() => setActiveScreen('forgot-otp')}>Submit</button>
              <p className="text-sm text-center mt-4 text-[#FF4D00] cursor-pointer" onClick={() => setActiveScreen('login')}>
                ← Back to Sign In
              </p>
            </>
          )}

          {activeScreen === 'forgot-otp' && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-center">Forgot Password</h3>
              <p className="text-center text-gray-500 mb-6">Please enter the OTP sent to {formData.email}</p>
              <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="OTP" className="input-box" />
              <button className="primary-button">Submit</button>
              <p className="text-sm text-center mt-4 text-[#FF4D00] cursor-pointer" onClick={() => setActiveScreen('login')}>
                ← Back to Sign In
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
