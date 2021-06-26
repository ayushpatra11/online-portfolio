import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Picture from '../images/me.png'
import axios from 'axios'
import {motion} from 'framer-motion'

const Container = styled.div`
    width: 30%;
    margin: 1px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #000000;
    @media screen and (max-width: 768px){
        width: 95%
    }
   
`;

const ContainerInside= styled(motion.div)`
    width: 95%;
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background: #1C1C1E;
    align-items: center;
    h1{
        margin-top: 5px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 2rem;
        color: white;
    }
    h3{
        margin-top: 5px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.2rem;
        font-style: italic;
        color: white;
    }
    h2{
        margin-top: 5px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.2rem;
        color: white;
    }
    a{
        margin: 2px;
        text-align: center;
        font-size: 0.8rem;
        color: white;
        font-style: italic;
        text-decoration: none;  
    }
    p{
        margin: 2px;
        text-align: center;
        font-size: 0.8rem;
        color: white;
        font-style: italic;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const ContainerNew= styled(motion.div)`
    width: 95%;
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background: #1C1C1E;
    align-items: center;
    h1{
        margin-top: 5px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 2rem;
        color: white;
    }
    h3{
        margin-top: 5px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.2rem;
        font-style: italic;
        color: white;
    }
    h2{
        margin-top: 5px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 1.2rem;
        color: white;
    }
    a{
        margin: 2px;
        text-align: center;
        font-size: 0.8rem;
        color: white;
        font-style: italic;
        text-decoration: none;  
    }
    p{
        margin: 2px;
        text-align: center;
        font-size: 0.8rem;
        color: white;
        font-style: italic;
    }

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Image= styled(motion.img)`
    object-fit: contain;
    max-width: 10rem;
    margin-top: 1rem;
    @media screen and (max-width: 1024px){
        max-width: 7rem;
    }
    @media screen and (max-width: 768px){
        max-width: 8rem;
    }
`;

const Skills = styled(motion.div)`
    height: 2rem;
    width: 90%;
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-bottom: ${props => props.last? "none": "0.5px solid grey"};
    position: relative;

`;

const SkillIcon = styled(motion.div)`
    width: 2rem;
    font-size: 1.5rem;
    color: white;
    margin-right: 10px;
`;

const OnIcon = styled(motion.div)`
    position: absolute;
    right: 0;
    padding: 10px;
    margin:  10px 0 0 10px;
`;

const SkillName = styled(motion.h3)`
    color: white;
    font-size: 1rem;
    font-weight: 100;
`;

const transition= {};

function Left() {

    const [skills, setSkills]=useState();

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/skills/") 
            .then(res => {
                setSkills(res.data);
            })
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      

      var del=0.1;

    return (
        <Container>
            <ContainerInside
            initial={{y: 50, opacity: 0}}
            animate={{y:0, opacity: 1, transition:{transition}}}            
            >
            <Image 
            initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 0.6, ...transition}}
            src={Picture} />
            <motion.h1
            initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{delay: 0.3 , duration: 0.6, ...transition}}
            >Ayush Patra</motion.h1>
            <motion.h3
            initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{delay: 0.3 , duration: 0.6, ...transition}}
            >Front-End focussed, Full-Stack capable</motion.h3>
            <motion.a initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{delay: 0.5,duration: 0.6, ...transition}} href="http://ayushpatra.herokuapp.com/" target="_blank" rel="noreferrer">ayushpatra.herokuapp.com,</motion.a>
            <motion.p
            initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{delay: 0.7 ,duration: 0.6, ...transition}}
            >9716833565, ayushpatra11@gmail.com</motion.p>
            </ContainerInside>
            <ContainerInside
            variants={container}
            initial="hidden"
            animate="show"
            >
                {
                    (skills&&skills.map((skill, index) => {
                        del=del+0.08;
                        var skillname=skill.skillname;
                        var skillicon="fab fa-"+skill.skillicon;
                        if(skill.skillicon==="database"||skill.skillicon==="mobile-alt"){
                            skillicon="fas fa-"+skill.skillicon;
                        }
                        
                        return (
                            <Skills 
                            key={index}
                            initial={{y: 10, opacity: 0}}
                            animate={{y:0, opacity: 1}}
                            transition={{delay: del ,duration: 0.5, ...transition}}
                             last={skillname==="Flutter"? true: false}>
                                <SkillIcon>
                                <i className={skillicon}></i>
                                </SkillIcon>
                                <SkillName>
                                {skillname}
                                </SkillName>
                                <OnIcon>
                                <img alt="Turn On Icon" style={{objectFit: "contain", maxWidth: "2rem"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEvUlEQVRoge2YbWxTZRTHf8/Tri3rtm6rMuckweEUwQ0HDWygJMAwUaOJCIoxJsYEMMIHX4iZCYlLjIqByAia6CQmiAkICQYIIgaDKK9KGWzZiIQ3E2DDjI2WtRtre48fXMft6GAvt34w/X17znOe//+cD/fe5x5IkyZNmjRp0qCGkjz+6FKvQztnKCUTUBRh4LC0Gk0PwiUR1RyLyIGm6WvaB3v0jo0s2LLAdnrcmJfEYBFKHgP0iIodPAaK3wT5qnFy7iZUjXG75Ns2UvrHW1VasVpgkrU1DplTgnq/0ffp1oESkjYydl+Ny5MdXC/Iy6mrDcY4vBS7Chht95Bpc9ARC3M1EqSp6yLXoqFk1W4MBj2LL8yq6b51qx9Tjr1ZGEF9D0xLRfFum4uF3unM9ZQxznVP0hxDDOrDF9jZcYzdHfUYiHn7SAYyz++rbTEHExp56MC72U5X5CBQanUDAPO9FSweXUWePWvQZ850t7K6ZQf+znPm8KkMHJV+3yeBeMDWtyU1uqgttAXUTCuKNuNQdlbc9zyvjZ7NKD20F12+PYuncsuJSJST4b/i4bsNFZs0s2rM5uatzQKmRsqeLV+OqGWWVd+LTWlqx77KbM8jw9ZQSjE1qwQDg/rQ+Xi4pD0vJ3il7shh6H2VljZU5yFUj7jqJLxd+AzTskos0VpSMJe5nrK+tcCK8UeXeiH+TejpXgHkW+JmYrK7mBe8lZbpKRTvFT1Hrt0dD+U6bM5qAFV2crmbSKwFyLbMsdd0wwPLeHhUkZWyAHzb9itrW34AQCDoIFSoVTT2NBY3ATDFXZySJgDm51fg6n1pKMiJSNaTGoM5qTCb5ZmYClkAXNpBhfm5U8YcbWhVngqzyuwHUyF7Uz/LrK/KtRK532oThaIgI9dq2QTudeaZl8Ua8Fht4rFn4lB2q2UTuMuek2D5X13JLUcS719oIJA8dfgEomFuGFGrZRNoi15PsNTAuQFyh40gXIlcs1o2gcs3TD+PwlktSupTYXSo889UyCbXV3JCI/rnVBj9EmhKhSwAXUYPv3ee7VsrxV7toHMXcH3gY8PjeOg8DTev3Zay5ephuo0e4N8ril3CP2q/ry4M1FltJgift+6xWpZgrIuNbfv71kr40u+rC2sAcTg/BAY9ehksx0Pn2Hz1oGV6gvDxpW0EouF4qCMWYSX0XuMby1Z2KPjIMkcTtS27ONJ52hKtL678xN5AY99ahA/is6++D+LJKZ41wHZLHE3ExOCdC9+ws8M/Io3PWnfz9d/7zOHtjT7P2vgiYfgwsemNLFuX8xApGj7M807j9YInyLO575zcy+nuFlZf3mH+xUWgOTMarTxasS4Yjw00DtoGVIyw7qS4bU5e9E6nylNGiaswaU5MDI6Hz7Oz/Rh7rp1IHAcJh2Nin9c0dVWr+cyAA7qcnEAdwisW9nALRY58xrkKKMjIJVM7aI+GaIsEae6+aH6gzWwIe6JLzpSsu9F/444jU6VYBTxqUe3DQqAZVM2QR6aJKjW61B9YCCxS8DjmWVhqiQH7EVnf4Mv9bkRD7P6UNlTn6UjPDMMwJiilipTgGlGp/RBFt4hc0lo3K20cOFFem9qbZ5o0adKkSfN/4x+5lpp6Hv4xDgAAAABJRU5ErkJggg=="></img>
                                </OnIcon>
                            </Skills>
                        )
                    }))
                }
            </ContainerInside>
            <ContainerInside
            initial={{y: 10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 0.6, ...transition}}>
                <h2>Contact Me</h2>
                <ContainerNew>
                    <a href="https://www.linkedin.com/in/ayush-patra-31b36119b/" target='_blank' rel="noreferrer"><i style={{fontSize: '1.5rem', padding: '0 20px'}} className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/ayushpatra11" target='_blank' rel="noreferrer"><i style={{fontSize: '1.5rem', padding: '0 20px'}} className="fab fa-twitter"></i></a>
                    <a href="https://github.com/ayushpatra11" target='_blank' rel="noreferrer"><i style={{fontSize: '1.5rem', padding: '0 20px'}} className="fab fa-github-square"></i></a>
                </ContainerNew>
            </ContainerInside>
        </Container>
    )
}

export default Left
