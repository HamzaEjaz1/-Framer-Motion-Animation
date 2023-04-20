import React from 'react'
import { motion } from "framer-motion"
import styled from 'styled-components'
const Hero = () => {

    const fadeleft ={
        hidden:{opacity:0 , x:-100},
        visible :{opacity:1 , x:0}
    }
  return (
   <>
   
 <Section>
    <Contanier>
        <ColumnLeft>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        
        >Welcome to Space</motion.h1>
        <motion.p
        variants={fadeleft}
        initial='hidden'
        animate='visible'
        transition={{duration:1}}
        
        >Journey to Unkown</motion.p>
        <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition:{ duration: 1 }}}
           
        whileHover={{scale:1.05,}}
        whileTap={{scale:0.95, backgroundColor:"#67f6e7",border:'none',color:"#000"}}


        
        
        >Get Started</Button>
        </ColumnLeft>
        <ColumnRight>
        <Image src="../assets/Ellipse1.png" alt='planet1' whileTap={{scale:1.5}} 
        drag={true}
        dragConstraints={{left:0, right:250, top:0, bottom:50}}
        
        ></Image>
        <Image  dragConstraints={{left:0, right:250, top:0, bottom:50}} drag={true} src="../assets/Ellipse2.png" alt='planet2'></Image>
        <Image  dragConstraints={{left:0, right:250, top:0, bottom:50}} drag={true} src="../assets/Ellipse3.png" alt='planet3'></Image>
        <Image  dragConstraints={{left:0, right:250, top:0, bottom:50}}  drag={true} src="../assets/Ellipse4.png" alt='planet4'></Image>
        </ColumnRight>
    </Contanier>
 </Section>
   </>
  )
}

export default Hero;


const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px;


`


const Contanier =styled.div`
 display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc(100vw- 1300px)/2;

@media screen and (max-width:768px){
    grid-grid-template-columns:1fr;
}
`
const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`
const ColumnLeft =styled.div`
display: flex;
color:#fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;
h1{
  margin-bottom: 0.5rem;
  font-size:2rem
}
p{
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}

`
const Button =styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
color:#fff;
`
const ColumnRight =styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1){
    top:10px;
    left:10px;
}
${Image}:nth-child(2){
    top:170px;
    left:10px;
}
${Image}:nth-child(3){
    top:350px;
    left:50px;
}
${Image}:nth-child(4){
    top:100px;
    left:75px;
}

`