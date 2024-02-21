import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export default function UserInfoSidebar() {
    return (
        <>
            <Grid item lg={12} >
                <Box sx={{height: '35vh' , width: '22rem' , backgroundColor: 'white' ,display : 'flex' ,flexDirection:'column', justifyContent: 'center' , alignContent : 'center'}}>
                    <Box sx={{ display: 'flex' , justifyContent : 'center' , alignContent : 'center'}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '6rem', height: '6rem'}} />
                    </Box>

                    <Box sx={{display:'flex',flexDirection:'column' , justifyContent: 'center', alignItems:'center',gap:'0rem' }}>
                        <h4 style={{marginBottom:0}}>John Doe</h4>
                        <h6 style={{marginTop:0}}>Offline</h6>
                    </Box>
                    
                    <Box sx={{ display: 'flex' , justifyContent : 'center' , alignContent : 'center' , gap: '1rem'}}>
                        <Button  variant="outlined" sx={{color:'grey' , borderBlockColor:'grey', textTransform: 'none'}}><CallIcon sx={{mr:'0.5rem'}}/> Call</Button>    
                        <Button variant="outlined" sx={{color:'grey' , borderBlockColor:'grey', textTransform: 'none'}}><AccountCircleIcon sx={{mr:'0.5rem'}}/>Profile</Button>    
                    </Box>
                    
                </Box>
            </Grid>
            <Grid item lg={12}>
                <Box sx={{height:'65vh' , width: '22rem' ,backgroundColor:'#eef3f9'}}>
                    <br />
                    <Card sx={{height: '30%', width: '90%', backgroundColor: 'white', ml:'1rem'}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14,mb:'0.8rem'}} color="black" gutterBottom>
                                <strong>Customer Details</strong>
                            </Typography>
                            <Typography sx={{mb:'0.5rem'}} variant="body2">
                                <strong style={{color:'grey'}}>Email:</strong>
                                <strong><span style={{float:'right'}}>example@gmail.com</span></strong>
                            </Typography>
                            <Typography sx={{mb:'0.5rem'}} variant="body2" component="div">
                                <strong style={{color:'grey'}}>First Name</strong>
                                <strong><span style={{float:'right'}}>John</span></strong>
                            </Typography>
                            <Typography sx={{mb:'0.5rem'}} variant="body2" component="div">
                                <strong style={{color:'grey'}}>Last Name</strong>
                                <strong><span style={{float:'right'}}>Doe</span></strong>
                            </Typography>
                            <Typography variant='caption' component="div" color="#457393">
                                <strong>View more details</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </>
    )
}