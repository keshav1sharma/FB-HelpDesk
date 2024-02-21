import React from "react";
import { Button, Grid, Input, Link, TextField } from '@mui/material'
import { Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const LoginUser = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        try{
            const response = await axios.post('http://localhost:5000/auth/login', {email, password});
            console.log(response)
            if(response.status === 200){

                // Redirect to login page
                navigate('/fb-connect');
            }
            else{
                alert('Wrong credentials');
                navigate('/login');
            }
        }
        catch(err){
            console.log(err);
        }
        
    }

    return (
        <>
            <Grid container>
                <Grid item lg={12} xl={12} sm={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            backgroundColor: '#01509a'
                        }}
                    >
                        <Box sx={{ width: '30rem', height: '35rem', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', borderRadius: '5%' }}>
                            <h3 style={{ textAlign: 'center' }}>Login to your account</h3>
                            <form onSubmit={LoginUser}>
                                <Box sx={{width:'90%', ml:'1rem' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                                        <TextField fullWidth label="Email" type="email" name='email' />
                                        <TextField fullWidth label="Password" type="password" name='password' />
                                    </Box>
                                </Box>
                                <Button variant="contained" sx={{ ml:'4rem', width: '70%', mt: '1rem', backgroundColor: '#01509a', color: 'white' }} type="submit">Login</Button>
                                <br />
                                <br /><br />

                                <Link href="/" style={{ color: 'blue', ml:'2rem' }}>Don't have an account? Sign Up</Link>
                            </form>
                            
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}