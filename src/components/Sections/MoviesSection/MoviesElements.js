import styled from  'styled-components/macro'

const SectionContainer = styled.section`
  background: ${({theme}) => theme ? "#10564F":"#16796F"};
  padding: 20px 20px;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #FFF;
  margin: auto 2rem;

  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }

`

const SectionCards = styled.div`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`

export {
  SectionContainer,
  SectionTitle,
  SectionCards
}