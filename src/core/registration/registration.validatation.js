import { text } from '../../lib/common/text';
import { REG_PATTERN } from './registarion.constant';

export const registrationFormValidation = (values) => {
    const errors = {};
    if (!values.login) { 
        errors.login = text('REGISTRATION.REGISTRATION_FORM.REQUIRED'); 
    }
    if (!values.email) { 
        errors.email = text('REGISTRATION.REGISTRATION_FORM.REQUIRED');
    }
    if (values.email && !REG_PATTERN.EMAIL.test(values.email)) {
        errors.email = text('REGISTRATION.REGISTRATION_FORM.INVALID');
    }
    if (!values.password) { 
        errors.password = text('REGISTRATION.REGISTRATION_FORM.REQUIRED');
    }
    if (!values.passwordConfirm ) { 
        errors.passwordConfirm = text('REGISTRATION.REGISTRATION_FORM.REQUIRED');
    }
    if (values.password && values.passwordConfirm && !(values.password === values.passwordConfirm)) {
        errors.passwordConfirm = text('REGISTRATION.REGISTRATION_FORM.VALUES_MISMATCH');
    }
    return errors;
};