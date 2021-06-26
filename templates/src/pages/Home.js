import React from 'react';
import Top from '../components/Top';
import styled from 'styled-components';
import Right from '../components/Right';
import Left from '../components/Left'

const Container = styled.div`
  display: flex;
  padding-bottom: 80px;
  flex-direction: row;
  align-items: flex-start;
  ${'' /* background: white; */}
  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;



function Home() {
    return (
        <div>
        <Top />
        <Container>
            <Left />
            <Right />
        </Container>
        </div>
    )
}

export default Home
