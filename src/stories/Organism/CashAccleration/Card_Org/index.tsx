import { Card } from '@material-ui/core'
import React from 'react'
import Card_Mol from '../../../molecules/Card'
import {Container} from '@mui/material'

const Card_Org: React.FC = () => {
  return (
    <div>
    <Container sx={{
        boxSizing: "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "32px",
        gap: "12px",
        
        position: "absolute",
        width: "600px",
        height: "230px",
        left: "265px",
        top: "90px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
    }}>
      <Card_Mol text='Term cap' value='12 Months'/>
      <Card_Mol text='Available credit' value='$880.0k'/>
      <Card_Mol text='Max interest rate' value='12.00%'/>
      </Container>
    </div>
  )
}

export default Card_Org
