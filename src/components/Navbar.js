import React from 'react';
import { Link } from 'react-router-dom';
 import {Stack, Box, Typography} from '@mui/material';
 import Logo from '../assets/images/logofitquest-Photoroom.png';
const Navbar = () => {
  return (
  <Box sx={{ position: 'sticky', top: 0, zIndex: 1200, backdropFilter: 'saturate(180%) blur(8px)', backgroundColor: 'rgba(255,255,255,0.7)' }}>
  <Stack 
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  sx={{px:{sm:4,xs:2}, py:{sm:2,xs:1.5}}} >
    <Stack direction="row" alignItems="center" gap={1.5}>
      <Link to="/">
        <img src={Logo} alt='logo' style={{width:'56px',height:'48px'
   }}/>
      </Link>
      <Typography variant="h6" sx={{ fontWeight: 800 }}>FitQuest</Typography>
    </Stack>
 
    <Stack
     direction="row"
     gap="32px"
     fontSize="18px"
     alignItems="center"
      >
      <a href="#home" className="nav-underline" style={{textDecoration:'none', color:'#0B0C0F'}}>Home</a>
      <a href="#exercises" className="nav-underline" style={{textDecoration:'none',color:'#0B0C0F'}}>Exercises</a>
    </Stack>
  </Stack>
  </Box>
  )
}
export default Navbar