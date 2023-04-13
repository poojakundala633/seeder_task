import { Container } from '@mui/material'
import React from 'react'
import Cashkick_text from '../../../molecules/Cashkick_text'
import CashKick_icon from '../../../molecules/CashKick_icon'
import Button_CashAccleration from '../../../molecules/Button_CashAccleration'
import CashKick_Table from '../../../molecules/CashKick_Table'

const NewCashKick = () => {
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
        height: "270px",
        left: "265px",
        top: "325px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
      }}>
        <Container sx={{display:"flex"}}>
        <Cashkick_text text='Cash Accleration'/>
        <CashKick_icon/>
        </Container>
        <Container sx={{display:"flex" }}>
            <Button_CashAccleration text='My Contracts'/>
            <Button_CashAccleration text='My Cash Kicks'/>
        </Container>
        <CashKick_Table/>
      </Container>
    </div>
  )
}

export default NewCashKick
