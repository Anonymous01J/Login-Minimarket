import { useState } from 'react';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^([A-Za-z0-9\.]+)@([\w]{3,8})\.([\w]{2,3})(\.[\w]{2,4})?(\.[\w]{2,3})?$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/;

  const emailValid = emailRegex.test(email);
  const passwordValid = passwordRegex.test(password);

  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => setPassword(value);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async () => {
    if (!emailValid || !passwordValid) {
      alert('Datos inválidos');
      return;
    }

    try {
      const response = await fetch('https://gist.githubusercontent.com/Anonymous01J/559e7681155c0589436466f5f2d662f6/raw/2d8cbff678976a63db547f2fdcc210ed129c7d8c/data.json');
      const data = await response.json();

      const user = data.find(user => user.email === email && user.password === password);

      if (user) {
        alert('Ingreso exitoso');
      } else {
        alert('Datos inválidos');
      }
    } catch (error) {
      alert('Error en la petición');
      console.error(error);
    }
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    emailValid,
    passwordValid,
    showPassword,
    togglePassword,
  };
};

export default useLogin;