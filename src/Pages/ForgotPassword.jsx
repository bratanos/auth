import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('If the email exists, a reset link will be sent.');

      navigate('/verify-code');
    }, 1500);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-surface p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <motion.h2
          className="text-2xl font-semibold mb-4 text-textPrimary"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Forgot Password
        </motion.h2>

        <motion.p
          className="text-textSecondary mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Enter your email to receive a password reset link.
        </motion.p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 bg-transparent border border-accent rounded mb-4 text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent"
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-3 rounded-lg ${
            isSubmitting ? 'bg-purple-500' : 'bg-accent hover:bg-purple-700'
          } text-white transition duration-300`}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </motion.button>

        {message && (
          <motion.div
            className="mt-4 text-sm text-accent"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            {message}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ForgotPassword;
