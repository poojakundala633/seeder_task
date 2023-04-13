import { Typography } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Container } from '@mui/material';
type props = {
  text : string;
}
const Cashkick_text: React.FC<props> = ({ text })=> {
  return (
    <div>
    <Container sx={{display:"flex"}}>
      <Typography sx={{
        width: "688px",
        height: "20px",
        
        /* heading 2 */
        
        fontFamily: 'Gilroy',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "29px",
        letterSpacing: "-0.005em",
        
        /* text/high emp */
        
        color: "#E8E7F0",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: "0",
        flexGrow: "0",
      }}>
        {text} <InfoOutlinedIcon sx={{
            position: "absolute",
            left: "27.01%",
            right: "49.95%",
            top: "12.33%",
            bottom: "62.5%",
            
            /* icon/low emp */
            
            transform: "rotate(-180deg)",
            }}></InfoOutlinedIcon>
      </Typography>
      </Container>
    </div>
  )
}

export default Cashkick_text
