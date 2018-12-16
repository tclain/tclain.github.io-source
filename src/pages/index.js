import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/email'
import SEO from '../components/seo'
import { FullHeight, Nav, NavItem, Container, Text } from '../styled'
import { HugeHeader, FadedHeader, HeaderWrapper } from '../styled/header'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <FullHeight>
      <Container>
        <HeaderWrapper>
          <FadedHeader>> whoami</FadedHeader>
          <HugeHeader>
            Hi !<br /> I'm your new fullstack consultant
          </HugeHeader>
          <Nav>
            <NavItem target="_blank" href="https://linkedin.com/in/tclain">
              LinkedIn
            </NavItem>
            <NavItem target="_blank" href="https://github.com/tclain">
              Github
            </NavItem>
            <NavItem target="_blank" href="https://dev.to/tclain">
              Blog
            </NavItem>
          </Nav>
        </HeaderWrapper>
      </Container>
    </FullHeight>

    <FullHeight>
      <Container>
        <HeaderWrapper>
          <FadedHeader>> skills</FadedHeader>
          <HugeHeader>Javascript, FP and everything relevant to you</HugeHeader>
          <Text>
            I'm Javascript/React (but not limited to) expert, a speaker and
            educator with years of experience.
          </Text>
          <Text>
            I don't <i>just</i> complete user stories, I own your project from
            Day 1 and make it work for you.
          </Text>
          <Text>
            Seeing the long run, easing maintenance and evolution of your
            project, while being nice, THIS is my job.
          </Text>
        </HeaderWrapper>
      </Container>
    </FullHeight>

    <FullHeight>
      <Container>
        <HeaderWrapper>
          <FadedHeader>> experiences</FadedHeader>
          <HugeHeader>
            DX happiness, Scalable systems, Source of inspiration
          </HugeHeader>
          <Text>
            I've had the chance to work with startups, big companies and
            individuals alike.
          </Text>
          <Text>
            I'm known to be 120% dedicated, open with a sense of diplomacy.
          </Text>
          <Text>
            From technical assessment to crafting a reusable component library,
            while designing database schemas and fixing production bugs, I've
            seen it all.
          </Text>
        </HeaderWrapper>
      </Container>
    </FullHeight>

    <FullHeight>
      <Container>
        <HeaderWrapper>
          <FadedHeader>> values</FadedHeader>
          <HugeHeader>Testing, Code as a craft, Limitless curiosity</HugeHeader>
          <Text>
            Developpers from today will be remembered as the craftsman of
            tomorrow.
          </Text>
          <Text>
            Via thorough automated testing, code reviews and collaboration, I
            fit your vision with the techical part.
          </Text>
          <Text>
            I'm <i>always learning</i>. ReasonML ? Check. Elixir ? Love it.
            UI/UX ? InDesign Genome is my bed reading.
          </Text>
        </HeaderWrapper>
      </Container>
    </FullHeight>

    <FullHeight>
      <Container>
        <HeaderWrapper>
          <FadedHeader>> contact</FadedHeader>
          <HugeHeader>Based in MTL, available remotely</HugeHeader>
          <Image />
        </HeaderWrapper>
      </Container>
    </FullHeight>
  </Layout>
)

export default IndexPage
