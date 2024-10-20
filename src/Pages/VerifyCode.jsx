import { useState } from 'react';
import { motion } from 'framer-motion';

const VerifyCode = () => {
  const [code, setCode] = useState(Array(6).fill(''));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    console.log(code.join(''));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleVerify} className="bg-surface p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-textPrimary">Enter Verification Code</h2>
        <div className="flex justify-between mb-4">
          {code.map((digit, index) => (
            <motion.input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center text-2xl border border-accent rounded bg-transparent text-textPrimary"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          ))}
        </div>
        <motion.button
          className="w-full bg-accent text-white p-2 rounded hover:bg-purple-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Verify
        </motion.button>
      </form>
    </div>
  );
};

export default VerifyCode;
