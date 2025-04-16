import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });

    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000); // Toast disappears after 3 seconds
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast UI right here */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '80px',
              right: '30px',
              backgroundColor: '#333',
              color: '#fff',
              padding: '14px 20px',
              borderRadius: '10px',
              fontSize: '15px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              zIndex: 1002,
            }}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
