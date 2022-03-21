import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import './App.css';
import { RegistrationPage } from "./Views/RegistrationPage/RegistrationPage";



const theme = responsiveFontSizes(
  createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Inter',
        textTransform: 'none',
      },
    },
  })
);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RegistrationPage />
    </ThemeProvider>
  );
};

export default App;
