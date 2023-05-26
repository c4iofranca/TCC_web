import { colors } from "./../../theme/colors";
import styled, { css } from "styled-components";

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

export const HeaderTitle = styled.div`
  padding-top: 12px;
  padding-bottom: 8px;  
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const InfosButton = styled.button`
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid gainsboro;
`;

export const InfosAlerts = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

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
  gap: 24px;
`;

export const MainDash = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const UpperMain = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  gap: 24px;
  position: relative;
`;

export const UpperMainLeft = styled.div`
  flex: 1;
`;

export const ShipConfiguration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
  padding: 12px 0px;
`;

export const UpperMainRight = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UpperMainRightTop = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
`;

export const ShipFlowContainer = styled.div``;
export const ShipFlowItem = styled.div`
  position: relative;
`;

export const UpperMainRightBottom = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`;

export const BottomMain = styled.div`
  flex: 2;
  display: flex;
  width: 100%;
  position: relative;
  gap: 24px;
`;

export const BottomMainLeft = styled.div`
  flex: 1;
`;
export const BottomMainRight = styled.div`
  flex: 4;
`;

export const AsideDash = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AsideDashTop = styled.div`
  display: flex;
  flex: 5;
  position: relative;
`;

export const AsideDashBottom = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

// Shared
export const CategoryLabel = styled.p`
  border-left: 10px solid ${colors.BLUE_SYSTEM};
  padding-left: 12px;
`;
export const SubCategoryLabel = styled.p`
  width: 85%;
  text-align: initial;
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
`;
export const Value = styled.span.attrs(
  (props: { defineWidth?: boolean }) => props
)`
  width: ${(props) => (props.defineWidth ? "50%" : "initial")};
  color: #81858D

`;

export const Divider = styled.div`
  width: 80%;
  margin: auto;
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-bottom-color: grey;
  opacity: 0.5;
`;

export const Overlay = styled.div`
  top: 0;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div.attrs((props: { width: string, height: string }) => props)`
  width: ${(props) => props.width ? props.width : '80%'};
  height: ${(props) => props.height ? props.height : '70%'};
  background: rgb(20, 27, 45);
  padding: 32px;
  border-radius: 18px;
`;

export const ModalChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
