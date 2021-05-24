import { routesInit } from './router.core';

import { SIGNUP_ROUTE_PATH, SignupRouter } from '../../core/signup';
import { REGISTRATION_ROUTE_PATH, RegistrationRouter } from '../../core/registration';

export const routes = {
    [SIGNUP_ROUTE_PATH]: SignupRouter,
    [REGISTRATION_ROUTE_PATH]: RegistrationRouter
};

export const Router = routesInit(routes);
