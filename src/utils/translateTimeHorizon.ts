export const translateTimeHorizon = (timeHorizon: string) => {
  switch (timeHorizon) {
    case "daily":
      return "Diário";
    case "monthly":
      return "Mensal";
    case "weekly":
      return "Semanal";
  }
};
