import React, { useState } from "react";
import { GetLatestValuesBetweenTimestamp } from "../../../datasource/dataset";
import { Card } from "../../../features/Card";
import { Container, RightBottom, RightTop } from "./styles";

export default function RightContent() {
  const [tagsValues, setTagsValues] = useState();

  const getValues = async () => {
    try {
      const response = await GetLatestValuesBetweenTimestamp(['gtn', 't48', 'p48'])

      if (response) {
        setTagsValues(response.data);
      }

    } catch (error) {
      console.log("🚀 ~ file: index.tsx:12 ~ getValues ~ error:", error)
      
    }
  }

  return (
    <Container>
      <RightTop>
        <Card>Taxa de revoluções da turbina a gás</Card>
        {/* <Card>Taxa de revoluções do gerador de gás</Card> */}
        {/* <Card>Temperatura de saída da turbina HP</Card> */}
        <Card>Pressão de saída da turbina HP</Card>
      </RightTop>

      <RightBottom>
        <Card>Pressão dos gases de escape GT</Card>
        <Card>Fluxo de combustível</Card>
      </RightBottom>
    </Container>
  );
}
