export const GLOBAL_START_DATE = new Date(
  new Date().setDate(new Date().getDate() - 7)
).toISOString();
export const GLOBAL_MAIN_DATE = new Date(
  new Date().setHours(new Date().getHours() - 2)
).toISOString();
export const GLOBAL_END_DATE = new Date().toISOString();

// Last 24 hours
export const GLOBAL_START_DATE_DAILY = new Date(
  new Date().setHours(new Date().getHours() - 24)
).toISOString();

// Last 7 days
export const GLOBAL_START_DATE_WEEKLY = new Date(
  new Date().setDate(new Date().getDate() - 7)
).toISOString();

// Last 30 days
export const GLOBAL_START_DATE_MONTHLY = new Date(
  new Date().setDate(new Date().getDate() - 30)
).toISOString();

export const timeHorizonDict: Record<string, string> = {
    "daily": GLOBAL_START_DATE_DAILY,
    "weekly": GLOBAL_START_DATE_WEEKLY,
    "monthly": GLOBAL_START_DATE_MONTHLY
}