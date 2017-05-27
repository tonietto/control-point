import React from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import { compose, defaultProps, withState, withHandlers } from 'recompose';

import { RESET } from '../graphql/index';
import ResetPasswordCard from '../../components/resetPasswordCard/ResetPasswordCard';


/* eslint-disable react/prop-types */
const withData = (props) => {
  const changePassword = (token, email, password, confirmation) => {
    if (!props.loading) {
      props.toggleLoading();    // toggle loading
      props.toggleError(false); // disable error message
      props.mutate({ variables: { token, email, password, confirmation } }).then(() => {
        props.toggleLoading();            // toggle loading
        props.router.push('/login/form'); // change route
      }).catch((error) => {
        const type = error.message.substring('GraphQL error: '.length).substring(0, 3);
        switch (type) {
          case '422':
            props.updateErrorMessage('Este link forneceu um email inválido.');
            props.toggleError(true);
            break;
          case '500':
            props.updateErrorMessage('Esse link não é válido ou já expirou.');
            props.toggleError(true);
            break;
          default:
            console.log(error); // eslint-disable-line no-console
        }
        props.toggleLoading();
      });
    }
  };
  return (
    <ResetPasswordCard
      changePassword={changePassword}
      {...props}
    />
  );
};

const errorMessages = {
  passwordNotValid: 'A senha deve ter 6 caracteres ou mais',
  passwordsNotEqual: 'As senhas não conferem',
};

const enhance = compose(
  defaultProps({
    title: 'Criar nova senha',
    message: 'O link está errado ou já expirou.',
    successMessage: 'A nova senha foi alterada com sucesso.',
    nameLabel: 'Nome',
    emailLabel: 'Email',
    passwordLabel: 'Nova senha',
    confirmPasswordLabel: 'Confirme a nova senha',
    buttonLabel: 'OK',
    errorIcon: 'ban',
    errorTitle: 'Erro',
    errorMessages,
  }),
  withState('loading', 'toggleLoading', false),
  withState('error', 'toggleError', false),
  withState('errorMessage', 'updateErrorMessage', ''),
  withHandlers(
    {
      toggleLoading: props => () => {
        props.toggleLoading(!props.loading);
      },
      toggleError: props => (hasError) => {
        props.toggleError(hasError);
      },
      updateErrorMessage: props => (message) => {
        props.updateErrorMessage(message);
      },
    },
  ),
);

const ResetPasswordContainer = enhance(withRouter(withData));

export default graphql(RESET)(ResetPasswordContainer);
