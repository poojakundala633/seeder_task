import React from 'react'
import { Container,Button } from '@mui/material'

const Button_Back = () => {
  return (
    <div>
      <Container>
      <Button sx={{
        width: "37px",
        height: "29px",
        
        /* button 1 */
        
        fontFamily: 'Gilroy',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
        paddingLeft:"200px",
        /* identical to box height, or 119% */
        
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "capitalize",
        
        /* text/high emp */
        
        color: "#E8E7F0",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: "1",
        flexGrow: "0",
        border:"1px solid white",
      }}>Back</Button>
      </Container>
    </div>
  )
}

export default Button_Back
