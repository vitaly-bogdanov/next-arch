import { SIGNUP_ACTION_TYPE } from './signup.type';
import { 
    initRequestState, 
    setRequestPending,
    setRequestSuccess,
    setRequestError,
    resetRequestStatus
} from '../../main/store/store.service';

const initialState = {
  signupForm: initRequestState()
};

export const signupStore = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING:
        console.log('pending');
        return {
            ...state,
            signupForm: setRequestPending(state.signupForm)
        };

    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS:
        console.log('success');
        return {
            ...state,
            signupForm: setRequestSuccess(state.signupForm)
        };

    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR:
        console.log('error');
        return {
            ...state,
            signupForm: setRequestError(state.signupForm, action.message)
        };

    // case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_RESET:
    //     return {
    //         ...state,

    //     };

    default:
      return state;
  }
}
