import React from 'react'
import { Button } from '@mui/material'

const Button_Cashkick = () => {
  return (
    <div>
      <Button sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 40px",
        gap: "8px",
        
        width: "276px",
        height: "59px",
        
        /* Primary/purple/500
        
        Primary action color
        */
        background: "#6C5DD3",
        borderRadius: "12px",
        
        /* Inside auto layout */
        
        flex: "none",
        order: "1",
        alignSelf: "stretch",
        flexGrow: "0",
        color:"white",
      }}>
            New Cash Kick
      </Button>
    </div>
  )
}

export default Button_Cashkick
