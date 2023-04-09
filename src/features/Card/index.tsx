import styled from "styled-components";

export const Card = styled.div.attrs((props: { height: string, flex: number }) => props)`
  background-color: #06283F;
  border-radius: 6px;
  height: ${(props) => props.height || "initial"};
  flex: ${(props => props.flex || 1)};
  display: flex;
`;
