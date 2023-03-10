import React from "react";
import { Card } from "../../../features/Card";
import { colors } from "../../../theme/colors";
import { Container } from "./styles";

export default function LeftContent() {
  return (
    <Container>
      <Card>Torque do eixo da turbina a gás</Card>
      <Card>Torque da hélice de estibordo</Card>
      <Card>Torque da hélice de bombordo</Card>
    </Container>
  );
}
