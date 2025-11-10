import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import Logo from '../assets/images/logofitquest-Photoroom.png';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const triggerSearch = () => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;
    window.dispatchEvent(new CustomEvent('fitquest-search', { detail: { query } }));
    setSearchTerm('');
    const el = document.getElementById('exercises');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#exercises';
    }
  };

  return (
  <Box sx={{ position: 'sticky', top: 0, zIndex: 1200, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(11,12,15,0.9)', boxShadow: '0 10px 28px rgba(0,194,255,0.08)' }}>
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
      <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', textShadow: '0 0 8px rgba(0,194,255,0.35)' }}>FitQuest</Typography>
    </Stack>
 
    <Stack direction="row" gap="24px" alignItems="center">
      <a href="#home" className="nav-underline" style={{textDecoration:'none', color:'#B8EFFF'}}>Home</a>
      <a href="#exercises" className="nav-underline" style={{textDecoration:'none',color:'#B8EFFF'}}>Exercises</a>
      <TextField
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        onKeyDown={(e)=>{ if(e.key==='Enter'){ triggerSearch(); } }}
        placeholder="Search"
        size="small"
        sx={{
          minWidth: { xs: 140, sm: 220 },
          backgroundColor: '#101417',
          borderRadius: 30,
          color: '#FFFFFF',
          '& .MuiOutlinedInput-input': { color: '#FFFFFF', '::placeholder': { color: '#B8EFFF', opacity: 1 } },
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#00C2FF' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4FD7FF' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00A3B8' },
          '& .MuiOutlinedInput-root': { borderRadius: 30 }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search exercises" onClick={triggerSearch} size="small" sx={{ color: '#00C2FF', '&:hover': { textShadow: '0 0 10px #00C2FF' } }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23C16 6.01 12.99 3 9.5 3S3 6.01 3 9.5 6.01 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Stack>
  </Stack>
  </Box>
  )
}
export default Navbar