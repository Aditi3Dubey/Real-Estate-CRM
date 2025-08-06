import React, { useState, useEffect, useMemo } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImage from "../assets/loginImage.png";

// Move InputField outside to prevent recreation on every render
const InputField = ({
  type,
  name,
  value,
  label,
  placeholder,
  icon: Icon,
  hasPasswordToggle = false,
  onChange,
  onTogglePassword,
  showPassword
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Icon size={18} className="text-gray-400" />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full ${Icon ? "pl-10" : "pl-4"} ${
          hasPasswordToggle ? "pr-12" : "pr-4"
        } py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50`}
      />
      {hasPasswordToggle && (
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
          onClick={onTogglePassword}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      )}
    </div>
  </div>
);

const AuthPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [activeScreen, setActiveScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      setTimeout(() => {
        navigate("/");
      }, 0);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      if (rememberMe) localStorage.setItem("rememberedEmail", formData.email);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(matchedUser));
      onLogin();
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleRegister = () => {
    const { fullName, email, password, confirmPassword } = formData;
    if (!fullName || !email || !password) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.email === email)) {
      alert("Email already registered. Please login.");
      return;
    }

    const newUser = { name: fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(newUser));
    onLogin();
    navigate("/");
  };

  const handleSendOtp = () => {
    if (!formData.email) {
      alert("Enter your email to send OTP");
      return;
    }
    alert("OTP sent to " + formData.email);
    setActiveScreen("otp");
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      alert("OTP Verified. Please login.");
      setActiveScreen("login");
    } else {
      alert("Invalid OTP");
    }
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case "login":
        return (
          <div key="login" className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">Login</h3>
              <p className="text-gray-600 text-sm">
                Enter your credentials to access your account
              </p>
            </div>

            <InputField
              type="email"
              name="email"
              value={formData.email}
              label="Email Address"
              placeholder="Enter your email"
              icon={Mail}
              onChange={handleChange}
            />
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              label="Password"
              placeholder="Enter your password"
              icon={Lock}
              hasPasswordToggle
              showPassword={showPassword}
              onTogglePassword={togglePassword}
              onChange={handleChange}
            />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                Remember me
              </label>
              <button
                className="text-orange-500 hover:underline"
                onClick={() => setActiveScreen("forgot")}
              >
                Forgot Password?
              </button>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                className="text-orange-500 hover:text-orange-600 font-semibold"
                onClick={() => setActiveScreen("register")}
              >
                Register here
              </button>
            </p>
          </div>
        );

      case "register":
        return (
          <div key="register" className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                Create Account
              </h3>
              <p className="text-gray-600 text-sm">
                Register to manage your listings
              </p>
            </div>

            <InputField
              type="text"
              name="fullName"
              value={formData.fullName}
              label="Full Name"
              placeholder="Enter your full name"
              icon={User}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              label="Email"
              placeholder="Enter your email"
              icon={Mail}
              onChange={handleChange}
            />
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              label="Password"
              placeholder="Create password"
              icon={Lock}
              hasPasswordToggle
              showPassword={showPassword}
              onTogglePassword={togglePassword}
              onChange={handleChange}
            />
            <InputField
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              label="Confirm Password"
              placeholder="Confirm password"
              icon={Lock}
              onChange={handleChange}
            />

            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                className="text-orange-500 hover:text-orange-600 font-semibold"
                onClick={() => setActiveScreen("login")}
              >
                Sign In
              </button>
            </p>
          </div>
        );

      case "forgot":
        return (
          <div key="forgot" className="space-y-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">Reset Password</h3>
            <p className="text-sm text-gray-600">
              Enter your email to receive OTP
            </p>
            <InputField
              type="email"
              name="email"
              value={formData.email}
              label="Email Address"
              placeholder="Enter your email"
              icon={Mail}
              onChange={handleChange}
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold"
            >
              Send OTP
            </button>
            <button
              onClick={() => setActiveScreen("login")}
              className="text-orange-500 hover:underline text-sm"
            >
              Back to Login
            </button>
          </div>
        );

      case "otp":
        return (
          <div key="otp" className="space-y-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">Verify OTP</h3>
            <p className="text-sm text-gray-600">
              Enter the 6-digit code sent to your email
            </p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold"
            >
              Verify OTP
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="w-1/2 hidden lg:block">
        <img
          src={loginImage}
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-orange-50 px-4">
        <div className="w-full max-w-md">
          <img src={logo} className="w-36 h-26 m-auto mb-2" alt="Logo" />
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;