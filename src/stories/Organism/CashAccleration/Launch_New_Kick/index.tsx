import { Container } from '@mui/material'
import React from 'react'
import Launch_Cash_Kick from '../../../molecules/Launch_Cash_Kick'
import Button_Cashkick from '../../../molecules/Button_Cashkick'


const Launch_New_Kick = () => {
  return (
    <div>
      <Container sx={{
        boxSizing: "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "32px",
        gap: "20px",
        
        position: "absolute",
        width: "330px",
        height: "230px",
        left: "869px",
        top: "90px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
      }}>
        <Launch_Cash_Kick/>
        <Button_Cashkick/>
        </Container>
    </div>
  )
}

export default Launch_New_Kick
