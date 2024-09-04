import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{background:"black",borderBottom:"2px solid #132240",justifyContent:"space-around" }}>
          <Typography variant="h4" fontWeight="550">
              My Profile
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
            <Button sx={{fontWeight:"550"}} color="inherit">Home</Button>
            <Button sx={{fontWeight:"550"}} color="inherit">About</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
