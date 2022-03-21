import React from 'react';

import TextField from '@mui/material/TextField';


export function CustomTextField({
  name,
  id,
  label,
  type,
  onChange,
  onBlur,
  value,
  helperText,
  error,
}) {
  return (
    <TextField
      InputProps={{ style: { fontSize: '1.6rem' } }}
      InputLabelProps={{ style: { fontSize: '1.6rem' } }}
      name={name}
      id={id}
      label={label}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      helperText={helperText}
      error={error}
      variant='outlined'
    />
  );
}
