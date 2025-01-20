// src/screens/Forms/LoginForm.jsx
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { saveFormData, clearFormData } from "../../store/form/formSlice";
import ModalInfo from "../../components/ModalInfo";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const formData = useSelector(state => state.form.formData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.username || !formValues.email || !formValues.password) {
      setModalMessage('Por favor, completa todos los campos.');
      setShowModalInfo(true);
      return;
    }

    if (formValues.password === formData.password) {
      dispatch(saveFormData({
        username: formValues.username,
        email: formValues.email,
        module: formData.module
      }));
      setModalMessage(`Bienvenido ${formValues.username}`);
      setFormValues({
        username: '',
        email: '',
        password: ''
      });
    } else {
      setModalMessage('Password incorrecto');
      setFormValues(prev => ({
        ...prev,
        password: ''
      }));
    }

    setShowModalInfo(true);
  };

  const handleLogout = () => {
    dispatch(clearFormData());
    setFormValues({
      username: '',
      email: '',
      password: ''
    });
    setShowLogoutModal(false);
  };

  const hideModalInfo = () => setShowModalInfo(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowLogoutModal = () => setShowLogoutModal(true);
  const hideLogoutModal = () => setShowLogoutModal(false);

  const isLoggedIn = formData.username && formData.email;

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-6"
    >
      <ModalInfo
        visible={showModalInfo}
        message={modalMessage}
        onClose={hideModalInfo}
        isWelcome={modalMessage.startsWith('Bienvenido')}
      />
      
      {showLogoutModal && (
        <ModalInfo
          visible={showLogoutModal}
          message="¿Desea cerrar sesión?"
          onClose={hideLogoutModal}
        >
          <button onClick={handleLogout}>Presiona para salir</button>
        </ModalInfo>
      )}

      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Full stack program</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="module" className="block text-sm font-medium">Module</label>
            <input
              type="text"
              id="module"
              name="module"
              value={formData.module}
              disabled
              className="w-full p-2 border rounded-md bg-gray-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <button
                type="button"
                onClick={handleShowPassword}
                className="absolute right-2 top-2 text-sm text-blue-600"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
            {isLoggedIn && (
              <button
                onClick={handleShowLogoutModal}
                className="text-blue-600 underline"
                type="button"
              >
                Limpiar
              </button>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginForm;