import { useDispatch, useSelector } from 'react-redux';
import { RegistrationComponent } from './registration.component';
import { registrationFormValidation } from './registration.validatation';
import { REGISTRATION_FORM_FIELD_NAME } from './registarion.type';

export const RegistarationContainer = () => {
    const dispatch = useDispatch();
    const registarationFormSendData = (values) => {
        dispatch(signupFormUploadData(values));
    };

    const registrationFormGetInitialValue = () => ({
        [REGISTRATION_FORM_FIELD_NAME.LOGIN]: '',
        [REGISTRATION_FORM_FIELD_NAME.EMAIL]: '',
        [REGISTRATION_FORM_FIELD_NAME.PASSWORD]: '',
        [REGISTRATION_FORM_FIELD_NAME.CONFIRM_PASSWORD]: ''
    });

    return (
        <RegistrationComponent
            validation={registrationFormValidation}
            initialValue={registrationFormGetInitialValue()}
            onSubmitForm={registarationFormSendData}
            fieldName={REGISTRATION_FORM_FIELD_NAME}
        />
    );
};