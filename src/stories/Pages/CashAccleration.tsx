import React from 'react'
import Navbar from '../Organism/Navbar'
import Sidebar from '../Organism/Sidebar'
import Card_Org from '../Organism/CashAccleration/Card_Org'
import Launch_New_Kick from '../Organism/CashAccleration/Launch_New_Kick'
import NewCashKick from '../Organism/CashAccleration/NewCashKick'
import { Container,GlobalStyles } from '@mui/material'

const CashAccleration = () => {
  return (
    <div>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Container sx={{border:"1px solid black",height:"100vh",width:"100vw",background:"black",margin:"0"}}>
      <Sidebar/>
      <Navbar/>
      <Card_Org/>
      <Launch_New_Kick/>
      <NewCashKick/>
      </Container>
    </div>
  )
}

export default CashAccleration
