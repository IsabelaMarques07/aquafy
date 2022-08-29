import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 4vw;
    line-height: 36px;
`

const Title = (({text})=>{
    return(
        <Text>{text}</Text>
    )
})



export default Title;