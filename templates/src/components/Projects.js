import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import axios from 'axios';
import ReactPlayer from 'react-player';



const Container= styled(motion.div)`
    background: #000;
    margin: 0 0 20px 0;
    padding: 10px;
    border-radius: 8px;
    width: 90%;
    align-items: center;
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

const Project = styled(motion.div)`
    margin: 20px 5px;
    padding: 20px;
    width: 100%;
    background: #1C1C1E;
    border-radius: 8px;
    width: 90%;
    a{
        text-align: center;
        margin: 10px; 
        color: white;
        font-size: 1rem;
        font-weight: 200;
        text-decoration: none;
        border-radius: 8px;
        border: 2px solid grey;
        padding: 10px;
    }
`;

const Video = styled.div`
    object-fit: contain;
    padding:0;
    margin: 20px;
`;


function Projects() {

    const [projects, setProjects]=useState();

    useEffect(() => {
        axios.get("https://ayushpatraportfolio.herokuapp.com/api/projects/") 
        .then(res => {
            setProjects(res.data);
        })
    }, []);

    return (
        <Container>
            <h1>Projects</h1>
            {
                (projects && projects.map((project, index) => {
                    return(
                        <Project key={index}>
                            <Video>
                            <ReactPlayer url={project.ytlink} width='100%'
                            />
                            </Video>
                            <a href={project.githublink} rel="noreferrer" target='_blank'>GitHub Repository</a>
                        </Project>
                    )
                }))
            }
        </Container>
    )
}

export default Projects
