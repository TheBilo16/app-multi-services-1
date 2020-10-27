import styled from "styled-components/native";
import { colors } from "../../../../../config";

export const Container = styled.View``;

export const Input = styled.TextInput(props => ({
  height: !props.value ? 40 : 80,
  fontSize : 13,
  backgroundColor: '#f2f2f2',
  padding: '0 20px',
  fontFamily: 'RalewayRegular',
  borderRadius : 15
}))

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-left: 5px;
`;

export const Message = styled.Text`
  color: ${colors.mainSmoothed};
  font-size: 12px;
`;

export const EditIconContainer = styled.View`
  margin-right: 8px;
`;