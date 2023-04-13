import React from 'react'
import { Container, Button } from '@mui/material'

const Payment_Button = () => {
  return (
    <div>
      <Container>
        <Button sx={
          {
            display: "flex",
            flexDirection: "row",
            justifyContent : "center",
            alignItems: "center",
            padding: "20px 40px",
            gap: "8px",

            width: "276px",
            height: "59px",

            /* Primary/purple/500

            Primary action color
            */
            background: "#6C5DD3",
            opacity: "0.56",
            borderRadius: "12px",
            color:"white",
            /* Inside auto layout */

            flex: "none",
            order: "6",
            alignSelf: "stretch",
            flexGrow: "0",
          }
        }>Review your credits</Button>
      </Container>
    </div>
  )
}

export default Payment_Button
