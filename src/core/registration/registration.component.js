import React from 'react';
import { RegistrationFormContainer } from './frame/registration-form';
import { FormLayout } from '../../lib/elements/layout';
import { RegistarationStarategyContainer } from './frame/registration-strategy/registration-strategy.container';

export const RegistrationComponent = (props) => (
    <FormLayout>
        <div>Регистрация</div>
        <RegistrationFormContainer { ...props } />
        <RegistarationStarategyContainer />
        <div>Есть аккаунт? Войти</div>
    </FormLayout>
);