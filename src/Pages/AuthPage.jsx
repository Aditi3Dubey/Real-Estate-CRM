import React, { useState, useEffect } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImage from "../assets/loginImage.png";

const AuthPage = () => {
  const navigate = useNavigate();
  const [activeScreen, setActiveScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // On mount: if already logged in, redirect
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) navigate("/");
  }, [navigate]);

  // Generic input handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Reusable Input Field component
  const InputField = ({
    type,
    name,
    value,
    label,
    placeholder,
    icon: Icon,
    hasPasswordToggle = false,
  }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2 bg-white px-1 relative -mb-2 ml-3 w-fit z-10">
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
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full ${Icon ? "pl-10" : "pl-4"} ${
            hasPasswordToggle ? "pr-12" : "pr-4"
          } py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50`}
        />
        {hasPasswordToggle && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
            onClick={togglePassword}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        )}
      </div>
    </div>
  );

  // LOGIN Handler
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(matchedUser));
      navigate("/");
      window.location.reload(); // Force reload so header/sidebar appear instantly
    } else {
      alert("Invalid email or password");
    }
  };

  // REGISTER Handler
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
      alert("Email already registered. Please log in.");
      return;
    }

    const newUser = { name: fullName, email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/");
    window.location.reload(); // same reason
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left side image */}
      <div className="w-1/2 hidden lg:block">
        <img src={loginImage} alt="login" className="w-full h-full object-cover" />
      </div>

      {/* Right form side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-orange-50">
        <div className="w-full max-w-md px-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <img src={logo} className="w-24 h-16 m-auto" alt="Logo" />

            {activeScreen === "login" ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h3>
                  <p className="text-gray-600">Enter your credentials to access your account</p>
                </div>

                <InputField
                  type="email"
                  name="email"
                  value={formData.email}
                  label="Email Address"
                  placeholder="Enter your email"
                  icon={Mail}
                />
                <InputField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  label="Password"
                  placeholder="Enter your password"
                  icon={Lock}
                  hasPasswordToggle
                />

                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg mt-2 font-semibold"
                >
                  Sign In
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                  Don’t have an account?{" "}
                  <button
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                    onClick={() => setActiveScreen("register")}
                  >
                    Create Account
                  </button>
                </p>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h3>
                  <p className="text-gray-600">Register to manage your listings</p>
                </div>

                <InputField
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  label="Full Name"
                  placeholder="Enter your full name"
                  icon={User}
                />
                <InputField
                  type="email"
                  name="email"
                  value={formData.email}
                  label="Email"
                  placeholder="Enter your email"
                  icon={Mail}
                />
                <InputField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  label="Password"
                  placeholder="Create password"
                  icon={Lock}
                  hasPasswordToggle
                />
                <InputField
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  label="Confirm Password"
                  placeholder="Confirm password"
                  icon={Lock}
                />

                <button
                  onClick={handleRegister}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg mt-2 font-semibold"
                >
                  Create Account
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                  Already have an account?{" "}
                  <button
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                    onClick={() => setActiveScreen("login")}
                  >
                    Sign In
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
