import { Container } from '@mui/material'
import React from 'react'
import Logo from '../../molecules/Logo'
import Home from '../../molecules/Home'

const Sidebar = () => {
  return (
    <div>
      <Container sx={{
        boxSizing: "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 20px",
        gap: "40px",
        
        position: "absolute",
        width: "250px",
        left: "0px",
        top: "0px",
        bottom: "0px",
        
        /* background/elevation 1 */
        
        background: "#201F24",
        borderRight: "1px solid #222124",
        borderRadius: "0px",
      }}>
        <Logo/>
        <Home/>
      </Container>
    </div>
  )
}

export default Sidebar
