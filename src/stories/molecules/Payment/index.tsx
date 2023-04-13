import { Container, Typography } from '@mui/material'
import React from 'react'

const Payment = () => {
  return (
    <div>
                <Container sx={{display:"flex"}}>
                    <Typography variant='h6'
                    sx={{
                        
                      width: "220px",
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
                    }}>Pay back amount</Typography>

                    <Typography variant='h6'
                    sx={{
                        width: "88px",
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
                        marginRight:"50px"
                    }}>$0.00</Typography>
                    </Container>




                    <Container sx={{display:"flex"}}>

                    <Typography variant='h6' sx={{
                        width: "176px",
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
                    }}>Rate %</Typography>

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
                        marginRight:"150px",
                    }}>(0.00%)$0.00</Typography>
                    </Container> 

    <Container sx={{display:"flex"}}>
        <Typography variant="h6" sx={{
            width: "201px",
            height: "27px",
            
            /* heading 3 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "150%",
            /* identical to box height, or 27px */
            
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "0",
            flexGrow: "1",
        }}>Total Payment</Typography>
        <Typography variant="h6" sx={{
           width: "88px",
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
           marginRight:"150px",
        }}>$0.00</Typography>
    </Container>
      
    </div>
  )
}

export default Payment
