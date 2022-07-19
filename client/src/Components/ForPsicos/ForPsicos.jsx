import React from 'react'
import AllInOne from './AllInOne'
import LandingPsico from './LandingPsico'
import SubsectionPsico from './SubsectionPsico'
import MoreInfo from './MoreInfo'
import styled from 'styled-components'


function ForPsicos() {
  return (
    <>
    <LandingPsico />
    <Container> 
    <SubsectionPsico />
    <AllInOne />
    <MoreInfo />
    </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #fff;
`

export default ForPsicos