import { useState } from 'react'
import styled from 'styled-components'
import LeftContent from './components/Content/Left'
import MiddleContent from './components/Content/Middle'
import RightContent from './components/Content/Right'

export default function App() {

  return (
    <Container>
      <LeftContent />
      <MiddleContent />
      <RightContent />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 12px;
  height: 96vh;
  padding: 12px;

`