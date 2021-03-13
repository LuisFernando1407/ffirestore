import styled from 'styled-components/native'

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const View = styled.View`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  margin-top: 20px;
  margin-bottom: 2px;
  border-radius: 10px;
  background-color: ${props => props.color};
`;