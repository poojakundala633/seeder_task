import { Container } from '@mui/material'
import React from 'react'

const Avatar = () => {
  return (
    <div>
    <Container sx={{display:"flex"}}>
      <img src={require('./avatar.png')} style={{
        height:"34px",
        width:"34px",
        paddingLeft:"1050px",
        marginTop:"-50px",
      }}></img>
      <img src={require('./arrow-bottom.png')} style={{
        height:"20px",
        width:"20px",
        float:"right",
        marginTop:"-40px",
        marginLeft:"10px",
      }}></img>
      </Container>
    </div>
  )
}

export default Avatar
