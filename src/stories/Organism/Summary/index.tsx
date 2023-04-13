import { Container, Typography } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Term from '../../molecules/Term';
import Slider_Change from '../../molecules/Slider_Change';
import Payment from '../../molecules/Payment';
import Payment_Button from '../../molecules/Payment_Button';
const Summary = () => {
  return (
    <div>
      <Container sx={{
        boxSizing: "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "32px",
        gap: "20px",
        
        position: "absolute",
        width: "340px",
        height: "480px",
        left: "880px",
        top: "100px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
      }}>

        <Typography variant='h5' sx={{color:"white"}}>Summary
        <InfoOutlinedIcon sx={{marginBottom:'-5px',marginLeft:'10px',color:'grey'}}></InfoOutlinedIcon>
        </Typography>
        <Term></Term>
        <Slider_Change></Slider_Change>
        <Payment></Payment>
        <Payment_Button></Payment_Button>

      </Container>
    </div>
  )
}

export default Summary
