import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import axios from 'axios';

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

const School = styled(motion.div)`
    margin: 20px 5px;
    padding: 20px;
    width: 100%;
    background: #1C1C1E;
    border-radius: 8px;
    width: 90%;
    p{
        color: white;
        font-size: 1rem;
        font-weight: 200;
    }
`;

function Education() {
    const [education, setEdu] = useState();

    useEffect(() => {
        // axios.get("http://127.0.0.1:8000/api/education/") 
        //     .then(res => {
        //         setEdu(res.data);
        //     })
        axios.get("https://ayushpatraportfolio.herokuapp.com/api/education/") 
        .then(res => {
            setEdu(res.data);
            console.log(res.data)
        })
            
    }, [])

    var delay=0.5;

    return (
        <Container>
        <h1>Education</h1>
        {
            (education && education.map((school, index) => {

                delay+=0.3;
                return(
                    <School
                    key={index}
                    initial={{y: 10, opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition={{delay: delay, duration: 0.6}}
                    >
                        <h1>{school.name}</h1>
                        <p>{school.degree}</p>
                        <p>{school.stream}</p>
                        <p>{school.duration}</p>
                        {school.scholarships? <p>{school.scholarships}</p> : <p></p>}
                        <p>{school.marks}</p>
                        <p>{school.otheract}</p>
                    </School>
                )
            }))
        }
        </Container>
    )
}

export default Education
