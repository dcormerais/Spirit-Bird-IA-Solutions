import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  onClick, 
  className = "",
  href
}) => {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`button-primary px-6 py-3 rounded-full inline-flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  return href ? (
    <a href={href}>{buttonContent}</a>
  ) : (
    buttonContent
  );
};

export default GradientButton;