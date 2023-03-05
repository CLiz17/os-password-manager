import React, { useState } from 'react';

function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:"<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(16);
  const [password, setPassword] = useState('');

  function handleGenerateClick() {
    setPassword(generatePassword(passwordLength));
  }

  return (
    <div>
        <button onClick={handleGenerateClick}>Generate Password</button>
        <div>{password}</div>
    </div>
  );
}

export default PasswordGenerator;