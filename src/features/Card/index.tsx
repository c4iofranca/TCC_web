import styled from "styled-components";

export const Card = styled.div.attrs((props: { height: string, flex: number }) => props)`
  background-color: #1F2940;
  border-radius: 16px;
  height: ${(props) => props.height || "initial"};
  flex: ${(props => props.flex || 1)};
  display: flex;
`;
