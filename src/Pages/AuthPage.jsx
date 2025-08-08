import React, { useState, useEffect } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import BgImage from "../assets/Bg.png";
import logo from "../assets/logo.png";

// Floating Label Input Field Component
const FloatingInputField = ({
  type,
  name,
  value,
  label,
  placeholder,
  icon: Icon,
  hasPasswordToggle = false,
  onChange,
  onTogglePassword,
  showPassword,
  error, // New prop for error message
  hasError = false, // New prop to indicate error state
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value;

  return (
    <div className="relative">
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
            <Icon
              size={18}
              className={hasError ? "text-red-400" : "text-gray-400"}
            />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFloating ? "" : ""}
          autoComplete="off"
          className={`w-full ${Icon ? "pl-10" : "pl-4"} ${
            hasPasswordToggle ? "pr-12" : "pr-4"
          } py-3 border rounded-lg focus:outline-none focus:ring-2 from-white to-red-50 transition-all placeholder:text-black text-black duration-200 ${
            hasError
              ? "border-red-300 focus:ring-red-400 focus:border-red-400"
              : "border-gray-300 focus:ring-orange-400 focus:border-orange-400"
          }`}
        />
        {hasPasswordToggle && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer z-10"
            onClick={onTogglePassword}
          >
            {showPassword ? (
              <Eye
                size={18}
                className={hasError ? "text-red-400" : "text-gray-400"}
              />
            ) : (
              <EyeOff
                size={18}
                className={hasError ? "text-red-400" : "text-gray-400"}
              />
            )}
          </div>
        )}
      </div>
      {/* Floating Label */}
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none ${
          Icon ? "ml-7" : "ml-1"
        } ${
          isFloating
            ? `-top-2 -left-4 text-xs px-1 font-medium ${
                hasError
                  ? "text-red-500 bg-gradient-to-r from-white to-red-50"
                  : "text-orange-500 bg-gradient-to-r from-white to-red-50"
              }`
            : `top-3 text-sm ${hasError ? "text-red-500" : "text-gray-500"}`
        }`}
      >
        {label}
      </label>
      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};

const AuthPage = ({ onLogin }) => {
  const [activeScreen, setActiveScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedLogin && savedUser) {
      onLogin();
    }
  }, [onLogin]);

  const handleChange = (e) => {
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    setErrors({});
    if (!formData.email || !formData.password) {
      setErrors({
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

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
      setErrors({
  password: "Invalid email or password",
});
    }
  }

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
    // Check if login form is complete
    const isLoginFormComplete = formData.email && formData.password;

    // Check if register form is complete
    const isRegisterFormComplete =
      formData.fullName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword;

    // Check if forgot password form is complete
    const isForgotFormComplete = formData.email;

    // Check if OTP form is complete
    const isOtpFormComplete = otp.length === 6;

    switch (activeScreen) {
      case "login":
        return (
          <div key="login" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Login</h3>
              <p className="text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>
            {/* // Updated login form JSX (only the password field part needs to
            change) // In the login case of renderScreen(): */}
            <FloatingInputField
              type="email"
              name="email"
              value={formData.email}
              label="Email Address"
              placeholder="Enter your email"
              icon={Mail}
              onChange={handleChange}
              error={errors.email}
              hasError={!!errors.email}
            />
            <FloatingInputField
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
              error={errors.password}
              hasError={!!errors.password}
            />
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2 rounded w-4 h-4"
                />                                       
                <span className="text-gray-600">Remember me</span>
              </label>
              <button
                className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
                onClick={() => setActiveScreen("forgot")}
              >
                Forgot Password?
              </button>
            </div>
            <button
              onClick={handleLogin}
              disabled={!isLoginFormComplete}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                isLoginFormComplete
                  ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl cursor-pointer"
                  : "bg-orange-200 text-white cursor-not-allowed"
              }`}
            >
              Sign In
            </button>
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <button
                className="text-orange-500 hover:text-orange-600 font-semibold hover:underline transition-colors"
                onClick={() => setActiveScreen("register")}
              >
                Register here
              </button>
            </p>
          </div>
        );

      case "register":
        return (
          <div key="register" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Create Account
              </h3>
              <p className="text-gray-600">Register to manage your listings</p>
            </div>

            <FloatingInputField
              type="text"
              name="fullName"
              value={formData.fullName}
              label="Full Name"
              placeholder="Enter your full name"
              icon={User}
              onChange={handleChange}
            />
            <FloatingInputField
              type="email"
              name="email"
              value={formData.email}
              label="Email"
              placeholder="Enter your email"
              icon={Mail}
              onChange={handleChange}
            />
            <FloatingInputField
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
            <FloatingInputField
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
              disabled={!isRegisterFormComplete}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                isRegisterFormComplete
                  ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl cursor-pointer"
                  : "bg-orange-200 text-white cursor-not-allowed"
              }`}
            >
              Register
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <button
                className="text-orange-500 hover:text-orange-600 font-semibold hover:underline transition-colors"
                onClick={() => setActiveScreen("login")}
              >
                Sign In
              </button>
            </p>
          </div>
        );

      case "forgot":
        return (
          <div key="forgot" className="space-y-6 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Reset Password
              </h3>
              <p className="text-gray-600">Enter your email to receive OTP</p>
            </div>
            <FloatingInputField
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
              disabled={!isForgotFormComplete}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                isForgotFormComplete
                  ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl cursor-pointer"
                  : "bg-orange-200 text-white cursor-not-allowed"
              }`}
            >
              Send OTP
            </button>
            <button
              onClick={() => setActiveScreen("login")}
              className="text-orange-500 hover:text-orange-600 hover:underline transition-colors"
            >
              Back to Login
            </button>
          </div>
        );

      case "otp":
        return (
          <div key="otp" className="space-y-6 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Verify OTP
              </h3>
              <p className="text-gray-600">
                Enter the 6-digit code sent to your email
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 text-center text-xl tracking-widest"
                maxLength="6"
              />
            </div>
            <button
              onClick={handleVerifyOtp}
              disabled={!isOtpFormComplete}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                isOtpFormComplete
                  ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl cursor-pointer"
                  : "bg-orange-200 text-white cursor-not-allowed"
              }`}
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
          src={BgImage}
          alt="Login-Bg"
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-r from-white to-red-50 px-4">
        <div className="w-full max-w-md">
          <img src={logo} className="w-36 h-26 m-auto mb-2" alt="Logo" />
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};
export default AuthPage;

