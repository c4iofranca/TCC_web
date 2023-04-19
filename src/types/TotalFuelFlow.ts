interface DataColumn {
  initialDate: Date | string;
  finalDate: Date | string;
  intervalSum: number;
}

interface ITotalFuelFlow {
  totalLoad: string;
  data: DataColumn[];
}

export type { ITotalFuelFlow, DataColumn };
