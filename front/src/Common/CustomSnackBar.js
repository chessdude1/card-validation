import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';


export const CustomSnackBar = ({
  messageText,
  isOpen,
  setIsOpen,
}) => {
  const handleClose = (
    event,
    reason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color='secondary' size='small' onClick={handleClose}>
        Закрыть
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      ></IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={messageText}
        action={action}
      />
    </div>
  );
};
