import {
    PageLayout,
    ContentLayout,
    AuthLayout
} from '../../lib/elements/layout';
import { RegistarationContainer } from './registration.container';

export const RegistrationPage = () => (
    <ContentLayout>
        <PageLayout>
            <AuthLayout>
                <RegistarationContainer />
            </AuthLayout>
        </PageLayout>
    </ContentLayout>
);