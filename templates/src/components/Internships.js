import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { motion } from 'framer-motion'

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

const Internship = styled(motion.div)`
    margin: 20px 5px;
    padding: 20px;
    width: 100%;
    background: #1C1C1E;
    border-radius: 8px;
    width: 90%;
    h3{
        color: white;
        font-size: 1.4rem;
        font-style: italic;
    }
    p{
        color: white;
        font-size: 1rem;
        font-weight: 200;
    }
`;

function Internships() {
    const [internships, setInternships]= useState();
    useEffect(() =>{
        axios.get("https://ayushpatraportfolio.herokuapp.com/api/internships/") 
            .then(res => {
                setInternships(res.data);
            })
    } , []);

    return (
        <Container>
            <h1>Internships</h1>
            {
                (internships && internships.map((internship, index) => {
                    return(
                        <Internship key={index}>
                            <h3>{internship.name}</h3>
                            <p>{internship.positions}</p>
                            <p>{internship.duration}</p>
                            <p>{internship.description}</p>
                        </Internship>
                    )
                } ))
            }
        </Container>
    )
}

export default Internships
