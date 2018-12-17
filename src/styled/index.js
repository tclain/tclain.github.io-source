import React from 'react'
import styled from 'styled-components'

export * from './header'
export * from './text'
export * from './nav'

export const Root = styled('div')`
  margin: 0;
  & * {
    font-family: 'Barlow', sans-serif;
  }
`

export const Container = styled('div')`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

export const FullHeight = styled.div`
  min-height: 60vh;
  margin-bottom: 80px;
  padding-top: 25px;
  padding-bottom: 70px;
`
