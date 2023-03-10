import React from "react";
import { Card } from "../../../features/Card";
import { Container, MiddleBottom, MiddleMiddle, MiddleTop } from "./styles";

export default function MiddleContent() {
  return (
    <Container>
      <MiddleTop>
        <Card>Temperatura do ar de entrada do compressor GT</Card>
        <Card>Temperatura do ar de saída do compressor GT</Card>
      </MiddleTop>

      <MiddleMiddle>
        <Card>Pressão de ar de entrada do compressor GT</Card>
        <Card>Pressão de ar de saída do compressor GT</Card>
      </MiddleMiddle>

      <MiddleBottom>
        <Card>Controle de injeção de turbina</Card>
      </MiddleBottom>
    </Container>
  );
}
