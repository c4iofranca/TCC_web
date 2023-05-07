import styled from "styled-components";

export const AlertContainer = styled.div`
height: 100%`;

export const AlertHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AlertsHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: inherit;
  gap: 12px;
`;

export const ActiveAlerts = styled.div`
  flex: 1;
`;

export const ClosedAlerts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AlertCardContainer = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const AlertCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: gainsboro;
  margin-bottom: 6px;
  padding: 4px 0px;
  gap: 2px;
  border-radius: 8px;
  color: black;
  flex-direction: column;
  align-items: flex-start;
`;
