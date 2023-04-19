const startCampaign = "2023-04-11 05:48:04.802";

export default function calculateHoursTraveled() {
  const initialCampaign = new Date(startCampaign).getTime();
  const currentDay = new Date().getTime();

  const diffTime = Math.abs(currentDay - initialCampaign);
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

  return `${diffHours}h`;
}
