import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setSuccess("Login successful!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-500 to-red-500 text-white items-center justify-center p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome Back 👋</h1>
          <p className="text-lg opacity-90">
            Login to continue your amazing experience.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="bg-white/70 backdrop-blur-lg shadow-xl p-8 rounded-2xl w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Login
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm mt-3 text-center">{success}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
