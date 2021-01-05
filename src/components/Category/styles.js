import styled, { css } from 'styled-components/native';
import { Subheading, TouchableRipple, Surface } from 'react-native-paper';

const BorderedStyle = css`
  border-radius: 15px;
`;

export const Container = styled(TouchableRipple)`
  flex: 1;
  height: 100px;
  margin: 15px;
  ${BorderedStyle}
`;

export const StyledSurface = styled(Surface)`
  justify-content: center;
  align-items: center;
  padding: 15px;
  ${BorderedStyle}
`;

export const Name = styled(Subheading)`
  text-align: center;
`;
