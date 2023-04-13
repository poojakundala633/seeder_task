import React from 'react'
import Sidebar from '../../Organism/Sidebar'
import Launch_New_Kick from '../../Organism/CashAccleration/Launch_New_Kick'
import HomeTable from '../../Organism/HomeDisplay/HomeTable'
import HomePage_img from '../../molecules/HomePage_img'
import Navbar from '../../Organism/Navbar'
import { Container } from '@mui/material'
import NavContent from '../../molecules/NavContent'


const HomePage = () => {
  return (
    <div>
      <Container sx={{border:"1px solid black",height:"100vh",width:"100vw",background:"black",margin:"0"}}>
      <Sidebar/>
      <NavContent title='Good Afternoon' desc='April 02,2021'/>
      <HomePage_img/>
      <Launch_New_Kick/>
      <HomeTable/>
      </Container>
    </div>
  )
}

export default HomePage
