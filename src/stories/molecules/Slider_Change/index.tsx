import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import SliderCom from '../../components/Slider/Slider'

type SliderProps = {
  defaultValue: number;
  max: number;
  step: number;
};

const Slider_Change = () => {
  return (
    <div>
      <Container sx={{display:"flex"}}>
          <Typography variant="h6" 
          sx={{width: "209px",
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
            flexGrow: "1",}}>Slide to autoselect</Typography>
            <Button sx={{width: "41px",
height: "19px",

/* button 1 */

fontFamily: 'Gilroy',
fontStyle: "normal",
fontWeight: "600",
fontSize: "16px",
lineHeight: "19px",
/* identical to box height, or 119% */

display: "flex",
alignItems: "center",
textAlign: "center",
textTransform: "capitalize",

/* border/high emp */

color: "#413F4D",


/* Inside auto layout */

flex: "none",
order: "0",
flexGrow: "0",}}>Reset</Button>
      </Container>

      <SliderCom defaultValue={0} max={100} step={20}></SliderCom>

      <Container sx={{
       display:"flex"
      }}>
        <Typography variant="h6"
        sx={{
          width: "286px",
          height: "22px",
          
          /* body 1 */
          
          fontFamily: 'Gilroy',
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "140%",
          /* or 22px */
          
          
          /* Primary/purple/400 */
          
          color: "#B4A9FF",
          
          
          /* Inside auto layout */
          
          flex: "none",
          order: "2",
          alignSelf: "stretch",
          flexGrow: "0",
        }}>$0.00 <span>selected of</span> <span>$880,000.00</span></Typography>
      </Container>
    </div>
  )
}

export default Slider_Change
