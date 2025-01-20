// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearFormData } from '../store/form/formSlice';
import ModalInfo from './ModalInfo';
import { useState } from 'react';
import '../App.css';

const Navbar = () => {
    const formData = useSelector((state) => state.form.formData);
    const dispatch = useDispatch();
    const isLoggedIn = formData.username && formData.email;
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        dispatch(clearFormData());
        setShowLogoutModal(false);
    };

    const handleShowLogoutModal = () => {
        setShowLogoutModal(true);
    };

    const hideLogoutModal = () => {
        setShowLogoutModal(false);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/think">Think</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="navbar-user-info">
                {isLoggedIn && (
                    <div className="user-section">
                        <span>Bienvenido {formData.username} | {formData.email}</span>
                        <button 
                            onClick={handleShowLogoutModal}
                            className="logout-btn"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            <ModalInfo
                visible={showLogoutModal}
                message="¿Desea cerrar sesión?"
                onClose={hideLogoutModal}
            >
                <div className="modal-buttons">
                    <button 
                        onClick={handleLogout}
                        className="confirm-btn"
                    >
                        Confirmar
                    </button>
                    <button 
                        onClick={hideLogoutModal}
                        className="cancel-btn"
                    >
                        Cancelar
                    </button>
                </div>
            </ModalInfo>
        </nav>
    );
};

export default Navbar;