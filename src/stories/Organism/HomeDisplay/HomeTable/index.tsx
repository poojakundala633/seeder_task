import React from 'react'
import Cashkick_text from '../../../molecules/Cashkick_text'
import { Container } from '@mui/material'
import CashKick_Table from '../../../molecules/Home_Table'

const HomeTable = () => {
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
        width: "920px",
        height: "279px",
        left: "278px",
        top: "322px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
    }}>
      <Cashkick_text text='Your payment'/>
      <CashKick_Table/>
    </Container>
    </div>
  )
}

export default HomeTable
