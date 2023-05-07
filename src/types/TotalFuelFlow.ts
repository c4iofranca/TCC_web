interface DataColumn {
  initialDate: Date | string;
  finalDate: Date | string;
  intervalSum: number;
}

interface ITotalFuelFlow {
  totalLoad: string;
  data: DataColumn[];
  miles: string;
}

export type { ITotalFuelFlow, DataColumn };
