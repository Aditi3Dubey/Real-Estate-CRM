import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import logo from "../../assets/logo.png";
import loginImage from "../../assets/loginImage.png";

const AuthPage = () => {
  const [activeScreen, setActiveScreen] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
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
      window.location.href = "/";
    } else {
      alert("Password is incorrect.");
    }
  };

  const InputField = ({
    type,
    name,
    value,
    label,
    placeholder,
    icon: Icon,
    hasPasswordToggle = false,
    showPassword = false,
    onTogglePassword = null,
  }) => {
    return (
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
            className={`w-full ${Icon ? "pl-10" : "pl-4"} ${
              hasPasswordToggle ? "pr-12" : "pr-4"
            } py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 bg-gray-50`}
          />
          {hasPasswordToggle && (
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
              onClick={onTogglePassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      {/* Left image section */}
      <div className="w-1/2 hidden lg:block">
        <img
          src={loginImage}
          alt="login preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right form section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-orange-50 ">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {/* Logo */}
            <img src={logo} className="w-22 h-16 m-auto" />

            {activeScreen === "login" && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Welcome Back
                  </h3>
                  <p className="text-gray-600">
                    Enter your credentials to access your account
                  </p>
                </div>

                <div className="space-y-1">
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
                    hasPasswordToggle={true}
                    showPassword={showPassword}
                    onTogglePassword={togglePassword}
                  />

                  <div className="flex items-center justify-between mb-6 pt-2">
                    <label className="flex items-center text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="mr-2 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      Remember me
                    </label>
                    <button
                      type="button"
                      className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                      onClick={() => setActiveScreen("forgot-email")}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                      onClick={() => setActiveScreen("register")}
                    >
                      Create Account
                    </button>
                  </p>
                </div>
              </>
            )}

            {activeScreen === "register" && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Create Your Account
                  </h3>
                  <p className="text-gray-600">
                    Register to manage and track your listings
                  </p>
                </div>

                <div className="space-y-1">
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
                    label="Email Address"
                    placeholder="Enter your email"
                    icon={Mail}
                  />

                  <InputField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    label="Password"
                    placeholder="Create a password"
                    icon={Lock}
                    hasPasswordToggle={true}
                    showPassword={showPassword}
                    onTogglePassword={togglePassword}
                  />

                  <InputField
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    icon={Lock}
                  />

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      onClick={() => setActiveScreen("login")}
                    >
                      Create Account
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                      onClick={() => setActiveScreen("login")}
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </>
            )}

            {activeScreen === "forgot-email" && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Reset Password
                  </h3>
                  <p className="text-gray-600">
                    Enter your email and we'll send you a reset code
                  </p>
                </div>

                <div className="space-y-1">
                  <InputField
                    type="email"
                    name="email"
                    value={formData.email}
                    label="Email Address"
                    placeholder="Enter your email"
                    icon={Mail}
                  />

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      onClick={() => setActiveScreen("forgot-otp")}
                    >
                      Send Reset Code
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex items-center justify-center w-full text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors mt-6"
                    onClick={() => setActiveScreen("login")}
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </>
            )}

            {activeScreen === "forgot-otp" && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Enter Verification Code
                  </h3>
                  <p className="text-gray-600">
                    Please enter the 6-digit code sent to{" "}
                    <span className="font-semibold text-gray-800">
                      {formData.email}
                    </span>
                  </p>
                </div>

                <div className="space-y-1">
                  <InputField
                    type="text"
                    name="otp"
                    value={formData.otp}
                    label="Verification Code"
                    placeholder="Enter 6-digit code"
                  />

                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Verify Code
                    </button>
                  </div>

                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600 mb-2">
                      Didn't receive the code?{" "}
                      <button className="text-orange-500 hover:text-orange-600 font-semibold">
                        Resend
                      </button>
                    </p>
                    <button
                      type="button"
                      className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                      onClick={() => setActiveScreen("login")}
                    >
                      ← Back to Sign In
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
