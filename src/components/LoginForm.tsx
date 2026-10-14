import React, { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address containing "@"');
      return;
    }
    setEmailError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
