import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    background: transparent;
    height: 60px;
    margin-bottom: 0;
    h1{
        margin: 10px;
        color: white;
        font-size: 2.5rem;
    }
`;

function Top() {
    return (
        <Header>
            <h1>Portfolio</h1>
        </Header>
    )
}

export default Top
