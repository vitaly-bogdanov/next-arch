import React from 'react';

import { SignupFormContainer } from './frame/signup-form'

export const SignupComponent = (props) => (
    <div>
        <div>Регистрация</div>
        <SignupFormContainer  { ...props } />
        <div>Есть аккаунт? Войти?</div>
    </div>
);