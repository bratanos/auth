import { useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Admin', 'Manager', 'Employee'];

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <form onSubmit={handleSignup} className="bg-surface p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-textPrimary">Sign Up</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-accent rounded mb-4 text-textPrimary placeholder-textSecondary"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-accent rounded mb-4 text-textPrimary placeholder-textSecondary"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-accent rounded mb-4 text-textPrimary placeholder-textSecondary"
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-accent rounded mb-4 text-textPrimary placeholder-textSecondary"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border border-accent rounded mb-4 text-textPrimary"
        >
          <option value="" className="text-textSecondary">Select Role</option>
          {roles.map((role) => (
            <option key={role} value={role} className="text-black">
              {role}
            </option>
          ))}
        </select>

        <motion.button
          className="w-full bg-accent text-white p-2 rounded hover:bg-purple-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Signup;
