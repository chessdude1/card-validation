import React from 'react';
import Button from '@mui/material/Button';

export const CustomButton = ({
  type,
  disabled,
  children,
  variant,
  onClick,
}) => {
  return (
    <Button
      sx={{ textTransform: 'none', fontSize: '1.5rem' }}
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
