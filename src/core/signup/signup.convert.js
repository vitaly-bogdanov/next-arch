import { SIGNUP_FIELD_NAME, SIGNUP_DATA_NAME } from './signup.type';

export const convertSignupFormData = () => ({
    [SIGNUP_DATA_NAME.LOGIN]: data[SIGNUP_FIELD_NAME.LOGIN],
    [SIGNUP_DATA_NAME.PASSWORD]: data[SIGNUP_FIELD_NAME.PASSWORD]
});

export const performUserDataList = (raw) => ({
    userList: rew[SIGNUP_DATA_NAME.USER_LIST],
    pagination: raw[USER_DATA_NAME.USER_PAGINATION]
});