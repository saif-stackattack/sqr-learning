import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 7rem;
    p{
        margin-top: 40px;
        width: 100%;
        font-size: clamp(1rem 2rem 3rem);
    }
`;

const GraphText = () => {
    return (
       <Container>
           <h1>Proven to make you learn 2x faster</h1>
           <p>Our smart learning algorithms are proven to make you <strong>remember topics better</strong>. If you get a question wrong, we’ll show you the content again but in a different format. We’ll even do it at a time when it’s optimal for you to learn it. We’ve also hand-selected the best GIFs and memes on the internet so revision <strong>makes you laugh instead of stressed</strong>.</p>
       </Container>
    )
}

export default GraphText
