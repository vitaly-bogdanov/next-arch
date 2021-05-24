import styled from 'styled-components';
import { text } from '../../common/text';
import { FC } from 'react';
import { THEME_SIZE, THEME_COLOR } from '../../theme';
import { TextPropsType } from './text.type';

export const TextSecondary: FC<TextPropsType> = ({ tid, tvalue }) => {
    return <Text>{text(tid, tvalue)}</Text>
}

const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL};
    color: ${THEME_COLOR.TEXT_SECONDARY}
`;