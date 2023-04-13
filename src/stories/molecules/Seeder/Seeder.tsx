import { Container } from '@mui/material'
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import React from 'react'

const Seeder = () => {
  return (
    <div>
      <Container> <CropPortraitIcon sx={{
        position: "absolute",
        left: "45.87%",
        right: "0%",
        top: "34.27%",
        bottom: "0%",
        
        /* Primary/purple/500
        
        Primary action color
        */
        background: "#6C5DD3",
      }}></CropPortraitIcon>
      </Container>
      </div>
  )
}

export default Seeder
