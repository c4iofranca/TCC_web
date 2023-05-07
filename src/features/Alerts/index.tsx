import React, { useEffect, useState } from "react";
import { GetAlerts } from "../../datasource/alerts";
import {
  ActiveAlerts,
  AlertCard,
  AlertCardContainer,
  AlertContainer,
  AlertHeader,
  AlertsHistory,
  ClosedAlerts,
} from "./styles";
import CloseButton from "../../assets/icons/Close";

interface IAlertsProps {
  onClose: () => void;
}

interface IAlerts {
  id: string;
  model: string;
  startDate: Date | string;
  endDate: Date | string | null;
}

export default function Alerts({ onClose }: IAlertsProps) {
  const [alerts, setAlerts] = useState<IAlerts[]>([]);

  const getAlerts = async () => {
    const response = await GetAlerts();

    if (response) setAlerts(response.data);
  };

  useEffect(() => {
    getAlerts();
  }, []);

  //   const activeAlerts = alerts.filter(x => x.endDate === null)

  const compressorAlerts = alerts.filter(
    (x) => x.model === "y1" && x.endDate !== null
  );
  const turbineAlerts = alerts.filter(
    (x) => x.model === "y2" && x.endDate !== null
  );

  const activeCompressorAlert = alerts.find(
    (x) => x.model === "y1" && x.endDate === null
  );
  const activeTurbineAlert = alerts.find(
    (x) => x.model === "y2" && x.endDate === null
  );

  return (
    <AlertContainer>
      <AlertHeader>
        <span>Ocorrência de Alertas</span>

        <CloseButton handleClose={onClose} />
      </AlertHeader>

      <AlertsHistory>
        <ActiveAlerts style={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 10}}>
          <div>
            <div>
              <span>Alerta Ativo do Compressor</span>
              {activeCompressorAlert ? (
                <AlertCard>
                  <strong>Início da Ocorrência: </strong>
                  <span>
                    {new Date(activeCompressorAlert.startDate).toLocaleString()}
                  </span>
                </AlertCard>
              ) : (
                <span>O equipamento está funcionando corretamente.</span>
              )}
            </div>

            <div>
              <span>Alerta Ativo da Turbina</span>
              {activeTurbineAlert ? (
                <AlertCard>
                  <strong>Início da Ocorrência: </strong>
                  <span>
                    {new Date(activeTurbineAlert.startDate).toLocaleString()}
                  </span>
                </AlertCard>
              ) : (
                <span>O equipamento está funcionando corretamente.</span>
              )}
            </div>
          </div>

          <span>
            Total de ocorrências no período: {alerts.length}
          </span>
        </ActiveAlerts>

        <ClosedAlerts>
          <AlertCardContainer>
            <span>Histórico de Alertas do Compressor</span>
            {compressorAlerts.map((alert) => {
              return (
                <AlertCard>
                  <span>
                    <strong>Início da Ocorrência: </strong>

                    {new Date(alert.startDate).toLocaleString()}
                  </span>
                  <span>
                    <strong>Fim da Ocorrência: </strong>

                    {new Date(alert.endDate!).toLocaleString()}
                  </span>
                </AlertCard>
              );
            })}
          </AlertCardContainer>
          <AlertCardContainer>
            <span>Histórico de Alertas da Turbina</span>
            {turbineAlerts.map((alert) => {
              return (
                <AlertCard>
                  <span>
                    <strong>Início da Ocorrência: </strong>

                    {new Date(alert.startDate).toLocaleString()}
                  </span>
                  <span>
                    <strong>Fim da Ocorrência: </strong>

                    {new Date(alert.endDate!).toLocaleString()}
                  </span>
                </AlertCard>
              );
            })}
          </AlertCardContainer>
        </ClosedAlerts>
      </AlertsHistory>
    </AlertContainer>
  );
}
