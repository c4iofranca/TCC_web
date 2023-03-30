export default function predictStatusY1(value: number) {
  if (value >= 0.98 && value < 1) return "notDecayed";

  if (value < 0.98) return "decayed";
}
