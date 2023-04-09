import { useState } from 'react'
import styled from 'styled-components'
import Dashboard from './components/Dashboard'

export default function App() {

  return (
    <Container>
      <Dashboard />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 12px;
  height: 96vh;
  padding: 12px;

`