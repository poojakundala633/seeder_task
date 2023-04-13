import { Typography } from '@mui/material'
import React from 'react'

const Launch_Cash_Kick = () => {
  return (
    <div>
      <Typography sx={{
        width: "200px",
        height: "58px",
        
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
        alignSelf: "stretch",
        flexGrow: "0",
      }}>Launch a new Cash Kick</Typography>

      <Typography sx={{
        width: "276px",
        height: "44px",
        
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
        order: "1",
        alignSelf: "stretch",
        flexGrow: "0",
      }}>
        You have upto $880,000.00 available for a new cash advance
      </Typography>
    </div>
  )
}

export default Launch_Cash_Kick
