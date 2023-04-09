import React, { useEffect, useState } from "react";
import {
  AsideDash,
  AsideDashBottom,
  AsideDashTop,
  BottomMain,
  ButtonTimeHorizon,
  Container,
  Dash,
  Header,
  HeaderTitle,
  Infos,
  InfosAlerts,
  InfosButton,
  MainDash,
  TimeHorizon,
  UpperMain,
  UpperMainLeft,
  UpperMainRight,
  UpperMainRightBottom,
  UpperMainRightTop,
} from "./styles";
import { Card } from "../../features/Card";
import PredictionCondition from "./PredictionCondition";
import L from "leaflet";
import * as geojson from "geojson";
import DualGauge from "./DualGauge";
import Column from "../../features/Charts/Column";
import Thick from "../../features/Thick";
import { colors } from "../../theme/colors";
import Propeller from "../../features/Propeller";
import Manete from "../../features/Manete";

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
          Dashboard - Navy CODLAG Fragate Ship | Última atualização:{" "}
          {new Date().toLocaleString()}
        </HeaderTitle>
        <Infos>
          <InfosButton>Detalhes do Sistema de Propulsão</InfosButton>
          <InfosAlerts>
            <span style={{width: 20, padding: 2, borderRadius: 10, background: 'red', color: colors.BLACK, fontWeight: 'bold'}}>!</span>
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: 12,
                    padding: "12px 0",
                  }}
                >
                  <p
                    style={{
                      borderLeft: `10px solid ${colors.BLUE_SYSTEM}`,
                      paddingLeft: 10,
                    }}
                  >
                    Características do Navio
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Comprimento O.A:</span>
                    <span>144.6m</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Boca O.A:</span>
                    <span>19.7m</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Calado O.A:</span>
                    <span>8.7m</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Deslocamento (FLDW):</span>
                    <span>6700t</span>
                  </p>

                  <p
                    style={{
                      borderLeft: `10px solid ${colors.BLUE_SYSTEM}`,
                      paddingLeft: 10,
                      marginTop: 20,
                    }}
                  >
                    Sistema de Propulsão
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Tipo:</span>
                    <span>CODLAG</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Turbina a Gás:</span>
                    <span>1 x 32 MW</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Motor Elétrico:</span>
                    <span>2 x 2.5 MW</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Gerador Diesel:</span>
                    <span>4 x 2.15 MV</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Bow Thrusters:</span>
                    <span>1 x 1 MW</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      paddingLeft: 20,
                    }}
                  >
                    <span style={{ width: "30%" }}>Tipo de Hélice:</span>
                    <span>CPP</span>
                  </p>
                </div>
              </Card>
            </UpperMainLeft>

            <UpperMainRight>
              <UpperMainRightTop>
                <Card flex={2}>1</Card>
                <Card>2</Card>
                <Card>3</Card>
                <Card>4</Card>
              </UpperMainRightTop>

              <UpperMainRightBottom>
                <Card flex={2}>
                  <DualGauge />
                </Card>
                <Card flex={2}>
                  <div style={{flex: 1, padding: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12}}>
                    Posição do Manete
                    <Manete />
                  </div>
                  <div style={{flex: 1, display: 'flex', flexDirection: 'column', padding: 12, justifyContent: "space-evenly"}}>
                    <span>Torque do Hélice</span>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                       <Propeller color={colors.WHITE_SYSTEM} label="BE" value={120} />
                       <Propeller color={colors.WHITE_SYSTEM} label="BB" value={120} />
                    </div>
                   
                  </div>
                  
                </Card>
              </UpperMainRightBottom>
            </UpperMainRight>
          </UpperMain>

          <BottomMain>
            <Card>
              <PredictionCondition />

              <div
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <DualGauge />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: "auto",
                  }}
                >
                  <span>Milhas Viajadas: 160 milhas</span>
                  <span>Horas no Mar: 600h</span>
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                  <div
                    style={{
                      maxWidth: "30%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>
                      Consumo Total de Combustível
                    </span>
                    <span style={{ fontSize: 26 }}>310kT</span>
                  </div>

                  <Column />
                </div>
              </div>

              <Thick label="Overview" />
            </Card>
          </BottomMain>
        </MainDash>

        <AsideDash>
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
              <Thick label="Estado do Mar e Condições do Tempo" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "40px 20px",
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
                  <span>Altura Significativa das Ondas (Hs):</span>
                  <span>1.20m</span>
                </p>
                <p
                  style={{
                    width: "inherit",
                    textAlign: "initial",
                    display: "flex",
                  }}
                >
                  <span>Profundidade:</span>
                  <span>50 pés</span>
                </p>
                <p
                  style={{
                    width: "inherit",
                    textAlign: "initial",
                    display: "flex",
                  }}
                >
                  <span>Correntes:</span>
                  <span>1 nós</span>
                </p>
                <p
                  style={{
                    width: "inherit",
                    textAlign: "initial",
                    display: "flex",
                  }}
                >
                  <span>Vento:</span>
                  <span>5 bf</span>
                </p>
              </div>
            </Card>
          </AsideDashBottom>
        </AsideDash>
      </Dash>
    </Container>
  );
}
