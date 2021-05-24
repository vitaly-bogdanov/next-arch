import { httpRequest } from '../../main/http';

import { SIGNUP_ACTION_TYPE,  } from './signup.type';
import { SIGNUP_API } from './signup.constant';

import { authSetData } from '../../lib/common/auth';

export const signupFormUploadData = (data) => async (dispatch) => {
    dispatch({ type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING });
    try {
        const response = await httpRequest({ 
            method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
            url: SIGNUP_API.SIGNUP_FORM_UPLOAD.ENDPOINT,
            data
        });
        dispatch(authSetData(response.data.accessToken));
        dispatch({ type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS });
    } catch (error) {
        dispatch({ type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR });
    }
};