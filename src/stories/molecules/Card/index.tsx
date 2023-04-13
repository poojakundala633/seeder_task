import { Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from 'react'
type props = {
  text : string;
  value : string;
}
const Card_Mol: React.FC<props> = ({ text, value })=> {
  return (
    <div>
      <img src={require('./coin.png')}
        style={{
          /* Auto layout */
          boxSizing:"border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
          
          width: "80px",
          height: "80px",
          
          /* grey/100 */
          
          background: "#262529",
          /* border/low emp */
          
          border: "1px solid #28272B",
          borderRadius: "12px",
          
          /* Inside auto layout */
          
          flex: "none",
          order: "0",
          flexGrow: "0",
        }}>
      </img>
      <Typography sx={{
        width: "196px",
        height: "22px",
        /* body 1 */
        
        fontFamily: 'Gilroy',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "140%",
        /* or 22px */
        
        
        /* text/med emp */
        
        color: "#C9C8CC",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: "0",
        flexGrow: "0",
      }}>{text}<InfoOutlinedIcon sx={{
        boxSizing: "border-box",

        position: "absolute",
        left: "15%",
        right: "0%",
        top: "54%",
        bottom: "0%",
        

        /* icon/low emp */
        
      }}></InfoOutlinedIcon></Typography>

      <Typography sx={{
        width: "204px",
        height: "34px",
        
        /* heading 2 */
        
        fontFamily: 'Gilroy',
        fontStyle: "normal",
        fontweight: "600",
        fontSize: "24px",
        lineHeight: "29px",
        letterSpacing: "-0.005em",
        
        /* text/high emp */
        
        color: "#E8E7F0",
        
        
        /* Inside auto layout */
        
        flex: "none",
        order: "1",
        alignSelf: "stretch",
        flexGrow: "0",
      }}>
        {value}
      </Typography>
    </div>
  )
}

export default Card_Mol
