import React from 'react'
import styled from 'styled-components';
import Tilt from 'react-tilt';
import './About.css';
const Container = styled.div`
    height: 100vh;
    display: flex;
    background-color: lightpink;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
    i{
        display: flex;
        flex-direction: column;
    }
    a{
        text-decoration: none;
        color: black;
    }

    h6{
        margin-top: 20px;
    }

    @media all and (max-width: 500px){
        height: 200vh;
    }
    

`;



const Card1 = styled(Tilt)`
    width: 200px;
    height: 270px;
    background: white;
    border-radius: 25px;
 
    
    @media all and (max-width: 500px){
        height: 500px;
        width: 300px;
    }
    h2{
        font-size: 3rem;
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
    }
    h3{
        color:  #651fac;
        
    }
    h6{
        @media all and (max-width: 500px){
            font-size: 1rem;
            margin-top: 90px;
        }
    }
   
`;
const Card2 = styled(Tilt)`
    width: 200px;
    height: 270px;
    background: white;
    border-radius: 25px;
   
    @media all and (max-width: 500px){
        height: 500px;
        width: 300px;

    }
    h2{
        font-size: 3rem;
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
    }
    h3{
        color:  #651fac;
    }
    h6{
        @media all and (max-width: 500px){
            font-size: 1rem;
            margin-top: 90px;
        }
    }
`;
const Card3 = styled(Tilt)`
    width: 200px;
    height: 270px;
    background: white;
    border-radius: 25px;

    
    @media all and (max-width: 500px){
        height: 500px;
        width: 300px;
    }
    h2{
        font-size: 3rem;
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
    }
    h3{
        color:  #651fac;
    }
    h6{
        @media all and (max-width: 500px){
            font-size: 1rem;
            margin-top: 90px;
        }
    }

`;


const Pricing = () => {
    return (
        <Container id="pricing">
                <a href="#"><Card1 options={{ max : 25 }}>
                <div className="card-details">
                    <h3>Basic</h3>
                    <h2>£
                        0</h2>
                    </div>
                  <h6>Class modules</h6>
                  <h6>Video tutorials</h6>
                </Card1>
                </a>
                <a href="#"><Card2 options={{ max : 25 }}>
                <div className="card-details">
                    <h3>Advanced</h3>
                    <h2>$5</h2>
                    </div>
                    <h6>Class modules</h6>
                    <h6>Video tutorials</h6>
                    <h6>Exam questions</h6>
                </Card2>
                </a>
                <a href="#"><Card3 options={{ max : 25 }}>
                <div className="card-details">
                    <h3>Premium</h3>
                    <h2>$10</h2>
                    </div>
                    <h6>Class modules</h6>
                    <h6>Advaced Video tutorials</h6>
                    <h6>More Exam questions</h6>
                </Card3>
                </a>
        </Container>
    )
}

export default Pricing
