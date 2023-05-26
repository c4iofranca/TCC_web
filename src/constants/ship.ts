import turbineImage from '../assets/images/turbine-removebg-preview.png'
import generator from '../assets/images/gerador.png'

export const shipDetails = [
  {
    name: "Comprimento O.A",
    value: "144.6m",
  },
  {
    name: "Boca O.A",
    value: "19.7m",
  },
  {
    name: "Calado O.A",
    value: "8.7m",
  },
  {
    name: "Deslocamento (FLDW)",
    value: "6700t",
  },
];

export const systemDetails = [
  {
    name: "Tipo",
    value: "CODLAG",
  },
  {
    name: "Turbina a Gás",
    value: "1 x 32 MW",
    model: "GE LM2500+G4",
    image: turbineImage, 
    width: 200,
    link: 'https://www.geaerospace.com/propulsion/marine/lm2500-plus-g4'
  },
  {
    name: "Motor Elétrico",
    value: "2 x 2.5 MW",
    model: "Jeumont Electric",
    image: generator,
    link: 'https://www.isottafraschini.it/wp-content/uploads/2020/10/IFM_SCHEDA_VL1716C2_WEB_26-10-2020_.pdf'
  },
  {
    name: "Gerador Diesel",
    value: "4 x 2.15 MW",
    model: "Isotta VL 1716"
  },
];
