import IModelParams from "../types/ChartBuilder";

interface ChartPropertiesProps {
  y1Model: IModelParams[]
}

export const ChartProperties: ChartPropertiesProps = {
  y1Model: [
    { name: "Temperatura de saída da turbina HP", unit: "ºC" },
    { name: "Taxa de revoluções do gerador de gás", unit: "rpm" },
    { name: "Controle de injeção de turbina", unit: "" },
    { name: "Coeficiente de estado de decaimento do compressor GT", unit: "" },
  ],
};
