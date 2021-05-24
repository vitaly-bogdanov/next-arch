import { setActivePath } from '../../lib/common/navigation';
import { REGISTRATION_ROUTE_PATH } from './registarion.constant';

export const RegistrationRouter = (ctx) => {
    ctx.store.dispatch(setActivePath(REGISTRATION_ROUTE_PATH));
};