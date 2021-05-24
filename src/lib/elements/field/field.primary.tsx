import styled from 'styled-components';
import React, { FC } from 'react';

import { TextSecondary } from '../text';
import { spacing } from '../../theme';
import { FieldPrimaryPropsType } from './field.type';

import { text } from '../../common/text';

export const FieldPrimary: FC<FieldPrimaryPropsType> = ({
    titleTid,
    onChange,
    onBlur,
    value,
    name,
    placeholderTid,
    error,
    type
}) => (
    <Container>
        <Title tid={titleTid} />
        <Input
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            placeholder={text(placeholderTid)}
        />
        { error && <ErrorMessage>{error}</ErrorMessage> }
    </Container>
);

const Title = styled(TextSecondary)`
    margin-bottom: ${spacing(1)};
`;

const Input = styled.input`
    background: #f3f3f3;
    height: 50px;
    border-radius: 5px;
    padding: 5px;
    padding-left: 20px;
`;

const Container = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    flex-direction: column;
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
`;