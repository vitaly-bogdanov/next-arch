import { SignupContainer } from './signup.container';
import {
    PageLayout,
    ContentLayout,
    AuthLayout
} from '../../lib/elements/layout';

export const SignupPage = () => (
    <ContentLayout>
        <PageLayout>
            <AuthLayout>
                <SignupContainer />
            </AuthLayout>
        </PageLayout>
    </ContentLayout>
);