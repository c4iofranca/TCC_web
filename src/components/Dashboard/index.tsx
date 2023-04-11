import React, { useEffect, useState } from "react";
import {
  AsideDash,
  AsideDashBottom,
  AsideDashTop,
  BottomMain,
  BottomMainLeft,
  BottomMainRight,
  ButtonTimeHorizon,
  CategoryLabel,
  Container,
  Dash,
  Divider,
  Header,
  HeaderTitle,
  Infos,
  InfosAlerts,
  MainDash,
  ShipConfiguration,
  ShipFlowContainer,
  ShipFlowItem,
  SubCategoryLabel,
  TimeHorizon,
  UpperMain,
  UpperMainLeft,
  UpperMainRight,
  UpperMainRightTop,
  Value,
} from "./styles";
import { Card } from "../../features/Card";
import PredictionCondition from "./PredictionCondition";
import L from "leaflet";
import Column from "../../features/Charts/Column";
import Thick from "../../features/Thick";
import { colors } from "../../theme/colors";
import Propeller from "../../features/Propeller";
import Manete from "../../features/Manete";
import { shipDetails, systemDetails } from "../../constants/ship";
import { IConfig } from "../../types/Gauge";
import Gauge from "../../features/Charts/Gauge";
import ShipDetail from "../../features/ShipDetail";

const gaugeConfig: IConfig = {
  height: (9 / 16) * 100 + "%",
  width: 300,
  center: ["50%", "65%"],
  size: "75%",
  indicators: {
    good: {
      min: 60,
      max: 100,
    },
  },
  yAxisConfig: {
    min: 60,
    max: 100,
  },
  thickness: 18,
  useThemeColor: true,
  pointerRadius: 14,
};

export default function Dashboard() {
  const [currentTimeHorizon, setCurrentTimeHorizon] = useState<string>("daily");

  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 6);
    L.tileLayer(
      "https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png",
      {
        maxZoom: 8,
        minZoom: 6,
      }
    ).addTo(map);

    L.circle([51.508, -0.11], {
      color: "#2A96F1",
      fillColor: "#2A96F1",
      fillOpacity: 1,
      radius: 2000,
    }).addTo(map);
    L.circle([51.508, -0.11], {
      color: "#2EE4F4",
      fillColor: "#2EE4F4",
      fillOpacity: 0.3,
      radius: 22000,
    }).addTo(map);
  });

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {`Dashboard - Navy CODLAG Fragate Ship > Sistema de Propulsão`}
        </HeaderTitle>
        <Infos>
          <InfosAlerts>
            <span
              style={{
                width: 20,
                padding: 2,
                borderRadius: 10,
                background: "#D5D800",
                color: colors.BLACK,
                fontWeight: "bold",
              }}
            >
              !
            </span>
            <span>Alertas</span>
          </InfosAlerts>
        </Infos>
        <TimeHorizon>
          <ButtonTimeHorizon
            selected={currentTimeHorizon === "daily"}
            onClick={() => setCurrentTimeHorizon("daily")}
          >
            Diário
          </ButtonTimeHorizon>
          <ButtonTimeHorizon
            selected={currentTimeHorizon === "weekly"}
            onClick={() => setCurrentTimeHorizon("weekly")}
          >
            Semanal
          </ButtonTimeHorizon>
          <ButtonTimeHorizon
            selected={currentTimeHorizon === "monthly"}
            onClick={() => setCurrentTimeHorizon("monthly")}
          >
            Mensal
          </ButtonTimeHorizon>
        </TimeHorizon>
      </Header>

      <Dash>
        <MainDash>
          <UpperMain>
            <UpperMainLeft>
              <Card height="100%">
                <ShipConfiguration>
                  <CategoryLabel>Características do Navio</CategoryLabel>
                  {shipDetails.map((detail) => {
                    return (
                      <SubCategoryLabel>
                        <Value defineWidth>{detail.name}:</Value>
                        <Value>{detail.value}</Value>
                      </SubCategoryLabel>
                    );
                  })}

                  <CategoryLabel>Sistema de Propulsão</CategoryLabel>
                  {systemDetails.map((detail) => {
                    return (
                      <SubCategoryLabel>
                        <Value defineWidth>{detail.name}:</Value>
                        <Value>{detail.value}</Value>
                      </SubCategoryLabel>
                    );
                  })}
                </ShipConfiguration>
              </Card>
            </UpperMainLeft>

            <UpperMainRight>
              <UpperMainRightTop>
                <Card flex={4}>
                  <PredictionCondition />
                </Card>
                <Card>
                  <ShipFlowContainer>
                    <ShipFlowItem>
                      <Thick label="Controle de Injeção da Turbina" />
                      <Gauge
                        value={66}
                        config={{ ...gaugeConfig, unit: "%" }}
                        showDataLabels
                      />
                    </ShipFlowItem>
                    <Divider />
                    <ShipFlowItem>
                      <Thick label="Fluxo de Combustível" />
                      <Gauge
                        value={66}
                        config={{ ...gaugeConfig, unit: "kg/s" }}
                        showDataLabels
                      />
                    </ShipFlowItem>
                  </ShipFlowContainer>
                </Card>
              </UpperMainRightTop>
            </UpperMainRight>
          </UpperMain>

          <BottomMain>
            <BottomMainLeft>
              <Card height="100%">
                <ShipConfiguration style={{ gap: 28 }}>
                  <div
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <CategoryLabel>Consumo Total de Combustível</CategoryLabel>
                    <span
                      style={{ textAlign: "center", padding: 12, fontSize: 24 }}
                    >
                      310 kT
                    </span>
                  </div>

                  <div
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CategoryLabel>Consumo Mensal</CategoryLabel>
                    <Column />
                  </div>

                  <div
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CategoryLabel>Navegação</CategoryLabel>
                    <SubCategoryLabel>
                      <Value defineWidth>Milhas Viajadas:</Value>
                      <Value>160 milhas</Value>
                    </SubCategoryLabel>
                    <SubCategoryLabel>
                      <Value defineWidth>Horas no Mar:</Value>
                      <Value>600h</Value>
                    </SubCategoryLabel>
                  </div>
                </ShipConfiguration>
              </Card>
            </BottomMainLeft>

            <BottomMainRight>
              <Card height="100%">
                <div style={{ width: "100%", padding: 12 }}>
                  <ShipDetail />
                </div>
              </Card>
            </BottomMainRight>
          </BottomMain>
        </MainDash>

        <AsideDash>
          <AsideDashBottom>
            <Card>
              <div
                style={{
                  flex: 1,
                }}
              >
                <Thick label="Posição da Manete" />
                <Manete />
              </div>
              <div>
                <Thick label="Controle de Injeção da Turbina" />
                <Gauge
                  value={66}
                  config={{ ...gaugeConfig, unit: "%", width: 250 }}
                  showDataLabels
                />
              </div>
            </Card>
          </AsideDashBottom>
          <AsideDashTop>
            <Card>
              <div style={{ width: "100%" }}>
                <Thick label="Navegação (Localização)" />
                <div
                  id="map"
                  style={{
                    height: "60%",
                    width: "90%",
                    border: "1px solid",
                    borderRadius: 16,
                    margin: "40px auto 10px",
                  }}
                />

                <div
                  style={{
                    padding: "20px 30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "18%" }}>Latitude:</span>
                    <span>22º53'43.9"S</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "18%" }}>Longitude:</span>
                    <span>43º10'10.3"W</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "18%" }}>CDG:</span>
                    <span>210º</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "18%" }}>SOG:</span>
                    <span>27.2 nós</span>
                  </p>
                </div>
              </div>
            </Card>
          </AsideDashTop>
          <AsideDashBottom>
            <Card>
              <Thick label="Torque do Hélice" />
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 18,
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Propeller
                    color={colors.WHITE_SYSTEM}
                    label="BE"
                    value={120}
                  />
                  <Propeller
                    color={colors.WHITE_SYSTEM}
                    label="BB"
                    value={120}
                  />
                </div>
              </div>
            </Card>
          </AsideDashBottom>
        </AsideDash>
      </Dash>
    </Container>
  );
}
