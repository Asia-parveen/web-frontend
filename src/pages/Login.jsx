// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
const myapiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${myapiUrl}/api/auth/login`, form);
      alert(res.data.message || "Login successful");
      setForm({ email: "", password: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="mb-3 w-full px-3 py-2 border rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="mb-3 w-full px-3 py-2 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
