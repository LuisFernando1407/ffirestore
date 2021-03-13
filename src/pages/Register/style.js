import styled from 'styled-components/native'

export const Content = styled.View`
  width: ${props => props.width};
  height: 100%;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

export const ContentButton = styled.View`
  width: 112%;
  height: 100%;
  margin-top: 20px;
  justify-content: center;
`;
