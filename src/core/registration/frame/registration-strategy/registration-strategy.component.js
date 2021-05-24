import React from 'react';
import { StrategyLayout } from '../../../../lib/elements/layout';
import styled from 'styled-components';

export const RegistrationStarategyComponent = () => (
    <Container>
        <div>Или войдите с помощью</div>
        <StrategyLayout>
            <Button>Apple</Button>
            <Button>Google</Button>
            <Button>Facebook</Button>
        </StrategyLayout>
    </Container>
)

const Button = styled.a`
    background: #ddd;
    padding: 15px 0;
    width: 30%;
    text-align: center;
`;

const Container = styled.div`
    display: grid;
    grid-gap: 10px;;
`;