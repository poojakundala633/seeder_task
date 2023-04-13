
import { Container,Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Container sx={{display:"flex"}}>
        <img src={require('./seedericon.png')} style={{
                position: "absolute",
                left: "5%",
                right: "45.87%",
                top: "7%",
                bottom: "0%",
                height:"25px",
                width:"25px"

                /* Primary/purple/500

                Primary action color
                */
                }}>
                
        </img>
        <Typography variant='h6' sx={{
            width: "164.12px",
            height: "32px",
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "30px",
            display: "flex",
            alignItems: "flex-end",
            
            /* text/high emp */
            
            color: "#E8E7F0",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "1",
        }}>Seeder</Typography>
      </Container>
    </div>
  )
}

export default Logo
