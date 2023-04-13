import React from 'react'
import { Container,Typography } from '@mui/material'


const Home = () => {
  return (
    <div>
      <Container sx={{display:"flex"}}>
        <img src={require('./home.png')} style={{
            position: "absolute",
            left: "8.33%",
            right: "8.34%",
            top: "21%",
            bottom: "8.37%",
            height:"20px",
            width:"20px",
            
            /* icon/low emp */
            
            
        }}></img>
        <Typography sx={{
            width: "150px",
            height: "17px",  
          
            /* button 2 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "14px",
            padding:"10px",
            /* or 100% */
            
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.01em",
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "1",
        }}>Home</Typography>
      </Container>

{/* these is for cash accerlation */}
      <Container sx={{display:"flex"}}>
      <img src={require('./coin.png')} style={{
            position: "absolute",
            left: "8.33%",
            right: "8.34%",
            top: "29%",
            bottom: "8.37%",
            height:"20px",
            width:"20px",
            
            /* icon/low emp */
            
            
        }}></img>
        <Typography sx={{
            width: "150px",
            height: "17px",  
          
            /* button 2 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "0px",
            padding:"10px",
            /* or 100% */
            
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.01em",
            
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "1",
        }}>Cash Accleration</Typography>
        </Container>

        {/* these is for watch now */}

        <Container sx={{display :"flex"}}>
            <img src={require('./flash.png')}
            style={{
                position: "absolute",
                left: "8.33%",
                right: "8.34%",
                top: "90%",
                bottom: "8.37%",
                height:"20px",
                width:"20px",
                
                /* icon/low emp */
            }}></img>
            <Typography sx={{
            width: "150px",
            height: "17px",  
          
            /* button 2 */
            
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "0px",
            paddingTop:"335px",
            paddingLeft:"10px",
            /* or 100% */
            
            display: "flex",
            alignItems: "flex-end",
            letterSpacing: "0.01em",
            
            
            /* text/low emp */
            
            color: "#A5A5A6",
            
            
            /* Inside auto layout */
            
            flex: "none",
            order: "1",
            flexGrow: "1",
        }}>Watch how to</Typography>
        </Container>
      
    </div>
  )
}

export default Home
