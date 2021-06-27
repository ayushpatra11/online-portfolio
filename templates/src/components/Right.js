import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Education from './Education';
import Projects from './Projects';
import Internships from './Internships';

const Container = styled(motion.div)`
    background: #000000;
    height: 90vh;
    margin: 1px;
    width: 70%;
    border-radius: 8px;
    overflow-y: scroll;
    overflow-x: auto;
    @media screen and (max-width: 768px){
        width: 95%;
        ${'' /* overflow-y: none; */}
        overflow-y: auto;
        height:auto;
    }

    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #555;
    border-radius: 30px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 30px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #fff;
    }
`;

const ContainerInside = styled(motion.div)`
    background: #0000;
    margin: 0;
    padding: 0;
    align-items: center;
`;

const About= styled(motion.div)`
    background: #1C1C1E;
    margin: 0 0 20px 0;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    h1{
        color: white;
        font-size: 1.8rem;
    }
    p{
        color: white;
        font-size: 1rem;
        font-weight: 200;
    }
`;




function Right() {
    return (
        <Container
        initial={{y: 10, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.6}}
        >
            <ContainerInside
            initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 0.6}}
            >
                {/* <About>
                    <h1>About Me</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </About> */}
                <Education />
                <Projects />
                <Internships />
            </ContainerInside>
        </Container>
    )
}

export default Right
