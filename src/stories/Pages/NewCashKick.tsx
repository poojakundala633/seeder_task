import React from 'react'
import EnhancedTable from '../Organism/Table';
import Summary from '../Organism/Summary';
import Sidebar from '../Organism/Sidebar';
import { Container } from '@mui/material';
import Navbar from '../Organism/Navbar';

const NewCashKick = () => {
  return (
    <div>
    <Container sx={{border:"1px solid black",height:"100vh",width:"100vw",background:"black",margin:"0"}}>
    <Navbar/>
     <EnhancedTable/>
    <Summary/>
    <Sidebar/>
    </Container> 
    </div>
  )
}

export default NewCashKick
