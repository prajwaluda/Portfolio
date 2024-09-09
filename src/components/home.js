import React from 'react'
import { Box,CardActionArea,Typography,useMediaQuery} from '@mui/material'
import {Card} from '@mui/material'
import {CardContent} from '@mui/material'
import {CardHeader} from '@mui/material'
import Profpic from "../assets/Prajwalchapripic.jpg"

export const Home = () => {
  return (
    <Box textAlign="left" sx={{p:{xs:"2rem 4rem",md:"5rem 15rem"},flex:1,display:"flex",flexDirection:"column",height:"100%"}}>
      <Typography variant='h1' color='#5182e4' fontWeight={"bold"}>Prajwal Udapudi</Typography>
      <Typography marginTop={"10px"} fontSize={"20px"}>Innovative and dynamic Web Developer with a passion for crafting seamless user experiences and bring fresh perspectives.</Typography>
      <Box margin="50px 0px">
        <Typography marginBottom={"30px"} variant='h2' fontWeight={"bold"}>Featured projects</Typography>
        <Box sx={{flexDirection:{xs:"column",md:"row"}}} display={"flex"} gap={"30px"} alignItems={"center"} justifyContent={"space-around"}>
          <Card
            sx={{ border:"2px solid #132240", background:"none",width:{xs:"100%",md:"50%"}}}
          >
              <CardContent>
            <CardActionArea sx={{p:"5px",borderRadius:"5px"}}>
                <Typography gutterBottom variant='h3'>Admin dashboard-MERN</Typography>
            </CardActionArea>
                <Typography sx={{fontSize:{xs:"20px",md:"15px"} }}>
                  A web application that provides administrators with a centralized interface 
                  to manage and monitor various aspects of a system or application. A seamless experience in customizing the settings.
                </Typography>
              </CardContent>
          </Card>
          <Card
            sx={{ border:"2px solid #132240", background:"none",width:{xs:"100%",md:"50%"}}}
          >
              <CardContent>
            <CardActionArea sx={{p:"5px",borderRadius:"5px"}}>
                <Typography gutterBottom variant='h3'>Voice assistant Stree-Python</Typography>
            </CardActionArea>
                <Typography sx={{fontSize:{xs:"20px",md:"15px"} }}>
                Stree is an intelligent Python-based voice assistant designed to simplify your daily tasks through seamless voice interactions. 
                Whether you're managing schedules, searching the web.
                </Typography>
              </CardContent>
          </Card>
        </Box>
      </Box>
      <Box margin="50px 0px">
        <Typography marginBottom={"30px"} variant='h2' fontWeight={"bold"}>Experience</Typography>
        <Card
            sx={{ border:"2px solid #132240", background:"none"}}
          >
              <CardContent>
                <CardActionArea sx={{p:"5px 0px",borderRadius:"5px",display:"flex",justifyContent:"space-between"}}>
                    <Typography gutterBottom variant='h3'>Hypersage Technologies Pvt Ltd</Typography>
                    <Typography textAlign={"right"} gutterBottom variant='h5'>Feb/2024 - Jun/2024</Typography>
                </CardActionArea>
                <Typography gutterBottom variant='h4'>Software developer Intern</Typography>
                <Typography sx={{fontSize:{xs:"20px",md:"15px"} }}>
                I have hands on experience as a Software Developer Intern on live projects, 
                creating web applications  such as CMS(College Management System), Site brokerage applications.
                </Typography>
              </CardContent>
          </Card>
      </Box>
    </Box>
  )
}
