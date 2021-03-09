import React from 'react'
import styled from 'styled-components';

const Footer = styled.div`
height: 200px;
background-color: lightpink;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;



const FooterContent = styled.div`
    h1{
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 10px;
    }
    a{
        text-decoration: none;
        color: black;
    }
`;





const Footerr = () => {
    return (
        <Footer>
                <FooterContent>
                <a href="#"><h1>SqrLearning</h1></a>
                <a href="#"><p>Subjects</p></a>
                <a href="#"><p>Modules</p></a>
                <a href="#"><p>Video tutorials</p></a>
                <a href="#"><p>Exam questions</p></a>
                </FooterContent>
        </Footer>
    )
}

export default Footerr;
