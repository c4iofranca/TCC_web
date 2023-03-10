import React from "react";
import { Card } from "../../../features/Card";
import { Container, RightBottom, RightTop } from "./styles";

export default function RightContent() {
  return (
    <Container>
      <RightTop>
        <Card>Taxa de revoluções da turbina a gás</Card>
        <Card>Taxa de revoluções do gerador de gás</Card>
        <Card>Temperatura de saída da turbina HP</Card>
        <Card>Pressão de saída da turbina HP</Card>
      </RightTop>

      <RightBottom>
        <Card>Pressão dos gases de escape GT</Card>
        <Card>Fluxo de combustível</Card>
      </RightBottom>
    </Container>
  );
}
