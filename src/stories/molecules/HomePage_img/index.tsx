import { Container } from '@mui/material'
import React from 'react'

const HomePage_img = () => {
  return (
    <div>
      <Container sx={{
        position: "absolute",
        left: "260px",
        right: "0px",
        top: "90px",
        bottom: "0px",
        
        
      }}>
        <img src={require('./homepage.png')} style={{
            width:"580px",
            height:"230px",
        }}></img>
      </Container>
    </div>
  )
}

export default HomePage_img
