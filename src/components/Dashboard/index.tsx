import { useEffect, useRef, useState } from "react";
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
  Modal,
  ModalChartHeader,
  Overlay,
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
import Column from "../../features/Charts/Column";
import Thick from "../../features/Thick";
import { colors } from "../../theme/colors";
import Propeller from "../../features/Propeller";
import Manete from "../../features/Manete";
import { shipDetails, systemDetails } from "../../constants/ship";
import { IConfig } from "../../types/Gauge";
import Gauge from "../../features/Charts/Gauge";
import ShipDetail from "../../features/ShipDetail";
import { ILimits } from "../../types/Limits";
import {
  GetCurrentValues,
  GetLimits,
  GetTotalFuelFlow,
} from "../../datasource/dataset";
import { ICurrentValues } from "../../types/CurrentValues";
import { GetLatestValuesBetweenTimestamp } from "../../datasource/dataset";
import { ITrends, TrendsNames } from "../../types/Trends";
import FullScreenChartModal from "../../features/FullScreenChartModal";
import CloseButton from "../../assets/icons/Close";
import { translateTimeHorizon } from "../../utils/translateTimeHorizon";
import Map from "ol/Map.js";
import View from "ol/View.js";
import "./styles.css";
import { fromLonLat } from "ol/proj.js";
import { Point } from "ol/geom";
import { Vector } from "ol/layer.js";
import { Vector as VectorSource } from "ol/source.js";
import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";
import GeoJSON from "ol/format/GeoJSON.js";
import calculateHoursTraveled from "../../utils/calculateHoursTraveled";
import { DataColumn, ITotalFuelFlow } from "../../types/TotalFuelFlow";
import Alerts from "../../features/Alerts";
import * as Tooltip from "@radix-ui/react-tooltip";

const tagsDict: Record<TrendsNames, string> = {
  GT_C_airIn_pressure: "Pressão de Entrada",
  GT_C_airOut_pressure: "Pressão de Saída",
  GT_exhGas_pressure: "Pressão de Exaustão",
  HP_T_exit_pressure: "Pressão de Saída",
};

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
  thickness: 16,
  useThemeColor: true,
  pointerRadius: 12.5,
};

export default function Dashboard() {
  const [currentTimeHorizon, setCurrentTimeHorizon] = useState<string>("daily");
  const [limits, setLimits] = useState<ILimits | null>(null);
  const [currentValues, setCurrentValues] = useState<ICurrentValues | null>(
    null
  );
  const [trends, setTrends] = useState<ITrends | null>(null);
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);
  const [openFullScreenChart, setOpenFullScreenChart] =
    useState<boolean>(false);
  const [dataFullScreenChart, setDataFullScreenChart] = useState<
    number[][] | undefined
  >([]);
  const [currentTagFullScreen, setCurrentTagFullScreen] =
    useState<TrendsNames>();
  const [fuelFlowInfo, setFuelFlowInfo] = useState<ITotalFuelFlow | null>(null);
  const firstRender = useRef(true);

  const getLimits = async () => {
    try {
      const response = await GetLimits();

      if (response) {
        setLimits(response.data);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:72 ~ getLimits ~ error:", error);
    }
  };

  const getCurrentValues = async () => {
    try {
      const response = await GetCurrentValues();
      console.log(
        "🚀 ~ file: index.tsx:129 ~ getCurrentValues ~ response:",
        response
      );

      if (response) {
        setCurrentValues(response.data);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:87 ~ getCurrentValues ~ error:", error);
    }
  };

  const getTrends = async () => {
    const tags = [
      "GT_C_airOut_pressure",
      "GT_C_airIn_pressure",
      "HP_T_exit_pressure",
      "GT_exhGas_pressure",
    ];
    try {
      const response = await GetLatestValuesBetweenTimestamp(
        tags,
        currentTimeHorizon
      );

      if (response) {
        setTrends(response.data);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:97 ~ getTrends ~ error:", error);
    }
  };

  const getFuelFlowInfo = async () => {
    try {
      const response = await GetTotalFuelFlow();

      if (response) {
        setFuelFlowInfo(response.data);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.tsx:156 ~ getFuelFlowInfo ~ error:", error);
    }
  };

  const handleOpenFullScreenModal = () => {
    setOpenFullScreenChart(true);
  };

  const handleCloseFullScreenModal = () => {
    setOpenFullScreenChart(false);
  };

  const handleDataFullScreen = (tag: TrendsNames) => {
    setDataFullScreenChart(trends?.temporal?.[tag]);
    setCurrentTagFullScreen(tag);
  };

  useEffect(() => {
    getLimits();
    getCurrentValues();
    getTrends();
    getFuelFlowInfo();

    const interval = setInterval(() => {
      getLimits();
      getCurrentValues();
      getTrends();
      getFuelFlowInfo();
    }, 180000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      const place = [-43.1699, -22.91947];
      const style = new Style({
        fill: new Fill({
          color: "#B1B3B3",
        }),
      });

      const vectorLayer = new VectorLayer({
        background: "#1F2940",
        source: new VectorSource({
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: new GeoJSON(),
        }),
        style: function (feature) {
          const color = "#B1B3B3";
          style.getFill().setColor(color);
          return style;
        },
      });

      new Map({
        view: new View({
          center: fromLonLat(place),
          zoom: 2.5,
          maxZoom: 5.5,
        }),
        layers: [
          vectorLayer,
          new Vector({
            source: new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(fromLonLat(place)),
                }),
              ],
            }),
            style: {
              "circle-radius": 4,
              "circle-fill-color": "#2EE4F4",
            },
          }),
          new Vector({
            source: new VectorSource({
              features: [
                new Feature({
                  geometry: new Point(fromLonLat(place)),
                }),
              ],
            }),
            style: {
              "circle-radius": 18,
              "circle-fill-color": "#2a96f133",
            },
          }),
        ],
        target: "map",
      });

      firstRender.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    getTrends();
  }, [currentTimeHorizon]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {`ShipReport Dashboard: Fragata F001 > Sistema de Propulsão`}
        </HeaderTitle>
        <Infos onClick={() => setOpenAlertModal(true)}>
          <InfosAlerts>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M15.2135 4.86816C16.3682 2.86816 19.255 2.86816 20.4097 4.86816L30.2637 21.9359C31.4184 23.9359 29.975 26.4359 27.6656 26.4359H7.95753C5.64813 26.4359 4.20475 23.9359 5.35946 21.9359L15.2135 4.86816Z"
                fill="#FDD302"
              />
              <path
                d="M18.8729 19.5657H16.7511L16.3975 8.24951H19.2265L18.8729 19.5657Z"
                fill="#262624"
              />
              <circle cx="17.812" cy="21.9902" r="1.41453" fill="#262624" />
            </svg>
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
                      <SubCategoryLabel key={detail.name}>
                        <Value>{detail.name}:</Value>
                        <Value>{detail.value}</Value>
                      </SubCategoryLabel>
                    );
                  })}

                  <CategoryLabel>Sistema de Propulsão</CategoryLabel>
                  {systemDetails.map((detail) => {
                    return (
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <SubCategoryLabel key={detail.name}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Value>{detail.name}:</Value>
                                <Value
                                  style={{
                                    fontSize: 12,
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {detail.model || ""}
                                  {detail.link && (
                                    <button
                                      style={{
                                        background: "transparent",
                                        border: "none",
                                        padding: 0,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => window.open(detail.link)}
                                    >
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                                          fill={colors.BLUE_SYSTEM}
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  )}
                                </Value>
                              </div>
                              <Value>{detail.value}</Value>
                            </SubCategoryLabel>
                          </Tooltip.Trigger>
                          {detail.image && (
                            <Tooltip.Portal>
                              <Tooltip.Content sideOffset={5}>
                                <Card style={{ border: "1px solid gainsboro" }}>
                                  <img
                                    src={detail.image}
                                    width={detail?.width || 160}
                                    height={160}
                                  />
                                </Card>
                                <Tooltip.Arrow className="TooltipArrow" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          )}
                        </Tooltip.Root>
                      </Tooltip.Provider>
                    );
                  })}
                </ShipConfiguration>
              </Card>
            </UpperMainLeft>

            <UpperMainRight>
              <UpperMainRightTop>
                <Card flex={4}>
                  <Thick label="" />
                  <PredictionCondition />
                </Card>
                <Card>
                  <ShipFlowContainer>
                    <ShipFlowItem>
                      <Thick label="Controle de Injeção da Turbina" />
                      <Gauge
                        value={
                          Number(
                            currentValues?.T_inj_control.toFixed(0)
                          ) as number
                        }
                        config={{
                          ...gaugeConfig,
                          unit: "%",
                          yAxisMax:
                            (limits?.gauges?.max_inj_control as number) * 1.2,
                        }}
                        showDataLabels
                      />
                    </ShipFlowItem>
                    <Divider />
                    <ShipFlowItem>
                      <Thick label="Fluxo de Combustível" />
                      <Gauge
                        value={currentValues?.fuel_flow as number}
                        config={{
                          ...gaugeConfig,
                          unit: "kg/s",
                          yAxisMax:
                            (limits?.gauges?.max_fuel_flow as number) * 1.2,
                        }}
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
                      {fuelFlowInfo?.totalLoad || "-"}
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
                    <CategoryLabel>Consumo Periódico</CategoryLabel>
                    <Column data={fuelFlowInfo?.data as DataColumn[]} />
                  </div>

                  <div
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <CategoryLabel>Navegação</CategoryLabel>
                    <SubCategoryLabel>
                      <Value>Milhas Viajadas:</Value>
                      <Value>{fuelFlowInfo?.miles || 0} milhas</Value>
                    </SubCategoryLabel>
                    <SubCategoryLabel>
                      <Value>Horas no Mar:</Value>
                      <Value>{calculateHoursTraveled()}</Value>
                    </SubCategoryLabel>
                  </div>
                </ShipConfiguration>
              </Card>
            </BottomMainLeft>

            <BottomMainRight>
              <Card height="100%">
                <div style={{ width: "100%" }}>
                  <ShipDetail
                    currentValues={currentValues}
                    limits={limits}
                    trends={trends}
                    handleOpenFullScreenModal={handleOpenFullScreenModal}
                    handleDataFullScreen={handleDataFullScreen}
                  />
                </div>
              </Card>
            </BottomMainRight>
          </BottomMain>
        </MainDash>

        <AsideDash>
          <AsideDashBottom>
            <Card>
              <div style={{ display: "flex", width: "100%" }}>
                <Thick label="Velocidade do Navio" />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Gauge
                    value={currentValues?.ship_speed as number}
                    config={{
                      ...gaugeConfig,
                      unit: "nós",
                      width: 250,
                      yAxisMax: 27 * 1.2,
                      useThemeColor: false
                      
                    }}
                    showDataLabels
                  />
                </div>
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
                    zIndex: 0,
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
                    <span style={{ width: "24%" }}>Latitude:</span>
                    <span>22º53'43.9"S</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "24%" }}>Longitude:</span>
                    <span>43º10'10.3"W</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "24%" }}>CDG:</span>
                    <span>210º</span>
                  </p>
                  <p
                    style={{
                      width: "inherit",
                      textAlign: "initial",
                      display: "flex",
                    }}
                  >
                    <span style={{ width: "24%" }}>SOG:</span>
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
                    color={"#B1B3B3"}
                    label="BE"
                    value={currentValues?.S_prplr_torque as number}
                  />
                  <div
                    style={{
                      border: "0.5px dotted grey",
                      opacity: 0.5,
                      height: "100%",
                    }}
                  ></div>
                  <Propeller
                    color={"#B1B3B3"}
                    label="BB"
                    value={currentValues?.P_prplr_torque as number}
                  />
                </div>
              </div>
            </Card>
          </AsideDashBottom>
        </AsideDash>
      </Dash>

      {openAlertModal && (
        <Overlay>
          <Modal width="35%" height="40%">
            <Alerts onClose={() => setOpenAlertModal(false)} />
          </Modal>
        </Overlay>
      )}

      {openFullScreenChart && (
        <Overlay>
          <Modal>
            <ModalChartHeader>
              <span>
                Horizonte de Tempo: {translateTimeHorizon(currentTimeHorizon)}
              </span>
              <CloseButton handleClose={handleCloseFullScreenModal} />
            </ModalChartHeader>

            <FullScreenChartModal
              data={dataFullScreenChart as number[][]}
              title={tagsDict[currentTagFullScreen as TrendsNames]}
            />
          </Modal>
        </Overlay>
      )}
    </Container>
  );
}
