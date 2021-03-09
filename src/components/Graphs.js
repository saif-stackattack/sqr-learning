import React from 'react'
import styled from 'styled-components';
import graph from '../assets/graph.svg';
import GraphText from './GraphText';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 735px){
        padding-bottom: 250px;
    }
`;
const Wrapper = styled.div`
height: 100vh;
width: 100vw;
`;
const InnerWrapper = styled.div`
max-width: 1200px;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;

flex-wrap: wrap;
`;
const Right = styled.div`
    width: 60%;
    @media (max-width: 768px){
        width: 100%;
    }
    
`;
const Left = styled.div`
width: 40%;
img{
    width: 100%;
    @media (max-width:768px){
        margin-top: 70px;
        
    }
}
@media (max-width: 768px){
    width: 80%;
}
`;



const Graphs = () => {
    return (
        <Container>
            <Wrapper>
                <InnerWrapper>
                    <Left>
                        <img src={graph} alt="graph" />
                    </Left>
                    <Right>
                        <GraphText />
                    </Right>
                </InnerWrapper>
            </Wrapper>
        </Container>
    )
}

export default Graphs
