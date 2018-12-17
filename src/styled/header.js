import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  padding: 20px 0 10px 10px;
`

export const HugeHeader = styled.h1`
  padding: 10px;
  font-family: 'Barlow', sans-serif;
  margin: 0;
  font-size: 3.8em;

  @media (max-width: 600px) {
    font-size: 2.2em;
  }
`

export const FadedHeader = styled.h3`
  padding: 10px;
  font-size: 0.8em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  font-family: Barlow;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #cecece;
`
