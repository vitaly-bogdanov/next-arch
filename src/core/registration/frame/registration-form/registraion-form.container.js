import { Formik } from 'formik';
import { RegistrationFormComponent } from './registration-form.component';
import { REGISTRATION_FORM_FIELD_KEY } from './registration-form.type';

export const RegistrationFormContainer = (props) => {
    const LOGIN_NAME = props.fieldName[REGISTRATION_FORM_FIELD_KEY.LOGIN];
    const EMAIL_NAME = props.fieldName[REGISTRATION_FORM_FIELD_KEY.EMAIL];
    const PASSWORD_NAME = props.fieldName[REGISTRATION_FORM_FIELD_KEY.PASSWORD];
    const CONFIRM_PASSWORD_NAME = props.fieldName[REGISTRATION_FORM_FIELD_KEY.CONFIRM_PASSWORD];

    return (
        <Formik
            initialValues={props.initialValue}
            validate={props.validation}
            onSubmit={props.onSubmitForm}
        >
            { (props) => (
                <RegistrationFormComponent 
                    { ...props } 
                    fieldLogin={LOGIN_NAME} 
                    fieldEmail={EMAIL_NAME} 
                    filedPassword={PASSWORD_NAME} 
                    filedConfirmPassword={CONFIRM_PASSWORD_NAME} 
                />
            ) }
        </Formik>
    );
}