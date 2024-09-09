import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <Box sx={{borderTop:"2px solid #132240",p:"1rem",textAlign:"left",display:"flex",alignItems:"center",gap:"20px",position:"relative",bottom:"0px"}}>
        <Link href="https://github.com/prajwaluda"> <GitHubIcon/></Link>
        <Link href="mailto:prajwaludapudi0@gmail.com"><EmailIcon/></Link>
        <Link href="https://www.linkedin.com/in/prajwal-udapudi-27469a259/"><LinkedInIcon/></Link>
    </Box>
  )
}
