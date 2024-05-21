import styled from 'styled-components'

export const MainContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(#161617, #3c2940);
color: #e2e8f0;
@media (max-width: 576px){
    min-width: 450px;
}
`
export const Img = styled.img`
width: 150px;
`

export const Heading = styled.p`
margin-bottom: 150px;
font-size: 25px;
@media(max-width: 576px){
    margin-bottom: 50px;
    
}
`

export const Button = styled.button`
background-color:#06b6d4;
border: none;
border-radius: 10px;
color: #e2e8f0;
font-weight: bold;
padding: 15px;
padding-left: 29px;
padding-right: 29px;
`
