import styled from 'styled-components';
import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';

export const SignupFormComponent = ({
    values, errors, touched,
    handleChange, handleBlur,
    handleSubmit, isSubmitting,
    fieldLogin, fieldPassword
}) => {
    const isFieldError = (name) => errors[name] && touched[name] && errors[name];
    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <FieldLayout>
                    <FieldPrimary
                        type='text'
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
                        name={fieldLogin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldLogin]}
                        error={isFieldError(fieldLogin)}
                    />
                    <FieldPrimary 
                        type='password'
                        titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
                        placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
                        name={fieldPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[fieldPassword]}
                        error={isFieldError(fieldPassword) }
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
    border-radius: 15px;
`;

const Container = styled.div`
    display: grid;
    gap: 12px;
`;