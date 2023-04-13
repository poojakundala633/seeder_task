import { Typography,Container } from '@mui/material'
import React from 'react'
import NavContent from '../../molecules/NavContent'
import Avatar from '../../molecules/Avatar'
import Button_Back from '../../molecules/Button_Back'

const Navbar = () => {
  return (
    <div>
      <Container sx={{background:"black"}}>
      {/* <Avatar/> */}
      <NavContent title='Cash Accleration' desc='Lets setup a new cash kick to power your saas'/>
      {/* <Button_Back/> */}
      </Container>
    </div>
  )
}

export default Navbar
