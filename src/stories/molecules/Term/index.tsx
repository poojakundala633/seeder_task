import { Container, Typography } from '@mui/material'
import React from 'react'

const Term = () => {
  return (
    <div>
      <Container sx={{display:"flex"}}>
        <Typography variant='h6' sx={{
            width: "191px",
            height: "22px",
            
            /* body 1 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            /* or 22px */
            
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "0",
            flexGrow: "1",
        }}>Term</Typography>
        <Typography variant="h6" sx={{
            width: "73px",
            height: "22px",
            
            /* body 1 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            /* or 22px */
            
            textAlign: "right",
            
            /* text/high emp */
            
            color: "#E8E7F0",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "0",
            marginRight:"50px",
        }}>12 months</Typography>


      </Container>


      <Container sx={{display:"flex"}}>
      <Typography variant='h6' sx={{
            width: "191px",
            height: "22px",
            
            /* body 1 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            /* or 22px */
            
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "0",
            flexGrow: "1",
        }}>Selected Contracts</Typography>
        <Typography variant="h6" sx={{
            width: "73px",
            height: "22px",
            
            /* body 1 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            /* or 22px */
            
            textAlign: "right",
            
            /* text/high emp */
            
            color: "#E8E7F0",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "0",
            marginRight:"50px",
        }}>0</Typography>
      </Container>
    </div>
  )
}

export default Term
