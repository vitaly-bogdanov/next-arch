import { signupFormValidation } from './signup.validation';
import { SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { SignupComponent } from './signup.component';
import { signupFormUploadData } from './signup.action';
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_STORE_NAME } from './signup.constant';

export const SignupContainer = () => {
    const dispatch = useDispatch();
    const signupFormSendData = (values) => {
        dispatch(signupFormUploadData(values));
    };
    // const {} = useSelector((state) => ({
    //     state: state[SIGNUP_STORE_NAME],
    //     pageLoading: state[]
    // }));

    const signupFormGetInitialValue = () => ({
        [SIGNUP_FORM_FIELD_NAME.LOGIN]: '',
        [SIGNUP_FORM_FIELD_NAME.PASSWORD]: ''
    });

    return (
        <SignupComponent
            validation={signupFormValidation}
            initialValue={signupFormGetInitialValue()}
            onSubmitForm={signupFormSendData}
            fieldName={SIGNUP_FORM_FIELD_NAME}
        />
    );
}