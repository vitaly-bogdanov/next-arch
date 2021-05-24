import styled from 'styled-components';
import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';

export const RegistrationFormComponent = ({
    values, errors, touched,
    handleChange, handleBlur,
    handleSubmit, isSubmitting,
    fieldLogin, fieldEmail, 
    fieldPassword, fieldConfirmPassword
}) => {
    const isFieldError = (name) => errors[name] && touched[name] && errors[name];
    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <FieldLayout>
                    <FieldPrimary 
                        type="text"
                        titleTid="REGISTRATION.REGISTRATION_FORM.FIELD.LOGIN.TITLE"
                        placeholderTid="REGISTRATION.REGISTRATION_FORM.FIELD.LOGIN.PLACEHOLDER"
                        name={fieldLogin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldLogin]}
                        error={isFieldError(fieldLogin)}
                    />
                    <FieldPrimary 
                        type="text"
                        titleTid="REGISTRATION.REGISTRATION_FORM.FIELD.EMAIL.TITLE"
                        placeholderTid="REGISTRATION.REGISTRATION_FORM.FIELD.EMAIL.PLACEHOLDER"
                        name={fieldEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldEmail]}
                        error={isFieldError(fieldEmail)}
                    />
                    <FieldPrimary 
                        type="password"
                        titleTid="REGISTRATION.REGISTRATION_FORM.FIELD.PASSWORD.TITLE"
                        placeholderTid="REGISTRATION.REGISTRATION_FORM.FIELD.PASSWORD.PLACEHOLDER"
                        name={fieldPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldPassword]}
                        error={isFieldError(fieldPassword)}
                    />
                    <FieldPrimary 
                        type="password"
                        titleTid="REGISTRATION.REGISTRATION_FORM.FIELD.LOGIN.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
                        name={fieldConfirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldPassword]}
                        error={isFieldError()}
                    />
                </FieldLayout>
                <Button type="submit" disabled={isSubmitting}>
                    Submit
                </Button>
            </Container>
        </form>
    );
}

const Button = styled.button`
    background: #ddd;
    border-radius: 5px;
    height: 50px;
`;

const Container = styled.div`
    display: grid;
    gap: 25px;
`;