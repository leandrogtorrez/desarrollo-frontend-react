// src/components/ModalInfo.jsx
import { motion } from 'framer-motion';

const ModalInfo = ({ visible, message, onClose, children, isWelcome }) => {
    if (!visible) {
        return null;
    }

    const modalClass = isWelcome ? "notification-success" : "notification-default";
    const closeButtonClass = isWelcome ? "close-btn-success" : "close-btn-default";

    return (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
                className={modalClass}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative p-6">
                    <p className="mb-4">{message}</p>
                    {children}
                    <button
                        className={closeButtonClass}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                        }}
                    >
                        X
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalInfo;
