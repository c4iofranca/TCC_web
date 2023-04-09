import styled, { css } from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderTitle = styled.div``;

export const TimeHorizon = styled.div`
  display: flex;
  gap: 6px;
`;

export const ButtonTimeHorizon = styled.button.attrs(
  (props: { selected: boolean }) => props
)`
  min-width: 80px;
  background: ${(props) =>
    props.selected ? colors.WHITE : colors.TRANSPARENT};
  border: 2px solid gainsboro;
  color: ${(props) => (props.selected ? colors.BLACK : colors.WHITE)};
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Dash = styled.div`
  flex: 1;
  margin-top: 8px;
  display: flex;
  gap: 12px;
`;

export const MainDash = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const UpperMain = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  gap: 12px;
  position: relative;
`;

export const UpperMainLeft = styled.div`
  flex: 1;
`;
export const UpperMainRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const UpperMainRightTop = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`;
export const UpperMainRightBottom = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`;

export const BottomMain = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  position: relative;
`;

export const AsideDash = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AsideDashTop = styled.div`
  display: flex;
  flex: 2;
  position: relative;
`;

export const AsideDashBottom = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;
