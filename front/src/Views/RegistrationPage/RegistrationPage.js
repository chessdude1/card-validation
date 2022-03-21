import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { createStyles, makeStyles } from '@mui/styles';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { CustomTextField } from '../../Common/CustomTextField';
import { CustomButton } from '../../Common/CustomButton';
import { CustomSnackBar } from '../../Common/CustomSnackBar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: '100px',
      maxWidth: '35rem',
      display: 'block',
      margin: '0 auto',
    },
    textField: {
      '& > *': {
        marginTop: '2.2rem',
        width: '100%',
      },
    },
    submitButton: {
      marginTop: '2.4rem',
    },
  })
);


export const RegistrationPage = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          cardNumber: '',
          expirationDate: '',
          CVV: '',
          amount: '',
        }}
        onSubmit={async (values) => {
          try {
            console.log(values)
          } catch (e) {
            console.log(e);
          }
        }}
        validationSchema={Yup.object().shape({
          cardNumber: Yup.string().matches(
            /\d{16}/
          ).required('Введите валидный номер карты'),

          expirationDate: Yup.string()
            .matches(
              /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/?((20)[0-9]{2})$/
            )
            .required(
              'Введите валидную дату окончания действия карты'
            ),
          CVV: Yup.string()
            .matches(/^[0-9]{3}$/)
            .required(
              'Введиет валидный CVV'
            ),
          amount: Yup.string().matches(/\d/).required(
            'Введите валидную сумму перевода'
          ),
        })}
      >
        {(props) => {
          const { values, touched, errors, handleBlur, handleChange } = props;
          const isErrors = Object.entries(errors).length !== 0;

          return (
            <Form className='registration-page__wrapper'>
              <CustomSnackBar
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                messageText='аккаунт с введеным номер уже существует'
              />
              <Typography
                sx={{
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '4.8rem',
                  marginBottom: '2.4rem',
                }}
                variant='h2'
              >
                Данные карты
              </Typography>

              <Grid container spacing={1} direction='row'>
                <Grid
                  sx={{ margin: '0 auto' }}
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <CustomTextField
                    name='cardNumber'
                    id='cardNumber'
                    label='Номер карты'
                    value={values.cardNumber}
                    type='text'
                    helperText={
                      errors.cardNumber && touched.cardNumber
                        ? 'Введите валидную дату окончания действия карты'
                        : 'Введите валидный номер карты в формате 1122221110005555'
                    }
                    error={!!(errors.cardNumber && touched.cardNumber)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  sx={{ margin: '0 auto' }}
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <CustomTextField
                    name='expirationDate'
                    id='expirationDate'
                    label='Дата окончания действия карты'
                    value={values.expirationDate}
                    type='text'
                    helperText={
                      errors.expirationDate && touched.expirationDate
                        ? 'Введите дату в формате MM/YYYY'
                        : 'Введите дату в формате MM/YYYY, например: 10/2024'
                    }
                    error={!!(errors.expirationDate && touched.expirationDate)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  sx={{ margin: '0 auto' }}
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <CustomTextField
                    name='CVV'
                    id='CVV'
                    label='CVV'
                    value={values.CVV}
                    type='number'
                    helperText={
                      errors.CVV && touched.CVV
                        ? 'Введите CVV'
                        : 'Введите валидный CVV, например: 111'
                    }
                    error={!!(errors.CVV && touched.CVV)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  sx={{ margin: '0 auto', paddingTop: '100px' }}
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <CustomTextField
                    name='amount'
                    id='amount'
                    label='Сумма'
                    value={values.amount}
                    type='number'
                    helperText={
                      errors.amount && touched.amount
                        ? "Введите сумму перевода"
                        : 'Сумма перевода'
                    }
                    error={
                      !!(errors.amount && touched.amount)
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  sx={{ margin: '0 auto' }}
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.submitButton}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '3.2rem',
                      marginBottom: '4.8rem',
                    }}
                  ></Box>
                  <CustomButton
                    variant='text'
                    type='submit'
                    disabled={isErrors}
                  >
                    Отправить данные карты
                  </CustomButton>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
