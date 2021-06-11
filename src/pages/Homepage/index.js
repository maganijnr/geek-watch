import React from 'react'

//Sections
import HeroSection from '../../components/Sections/Herosection'
import TrendingSection from '../../components/Sections/MoviesSection/TrendingSection'
import TopratedSection from '../../components/Sections/MoviesSection/TopratedSection'
import ActionSection from '../../components/Sections/MoviesSection/ActionSection'
import ComedySection from '../../components/Sections/MoviesSection/ComedySection'
import RomanceSection from '../../components/Sections/MoviesSection/RomanceSection'

//Styled
import styled from 'styled-components/macro'

const HomeBody = styled.div`
  width: 100%;
  height: 100%;
`

const Homepage = () => {
  return (
    <HomeBody>
      <HeroSection/>
      <TrendingSection isTrending={true} sectionTitle="Trending Movies"/>
      <TopratedSection isTrending={false} sectionTitle="Top Rated Movies"/>
      {/* <ActionSection isTrending={false} sectionTitle="Action Movies"/> */}
      <ComedySection isTrending={false} sectionTitle="Comedy Movies"/>
      <RomanceSection isTrending={false} sectionTitle="Romance Movies"/>
    </HomeBody>
  )
}

export default Homepage
