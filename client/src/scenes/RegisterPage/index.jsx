import React from "react";
import { Button, Grid, Input, Link, TextField } from '@mui/material'
import { Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const RegisterUser = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        try{
            const response = await axios.post('http://localhost:5000/auth/register', {username, email, password});
            if(response.status === 201){
                alert('User created successfully');
                // Redirect to login page
                
                navigate('/login');
            }
            else{
                alert('User not created');
                navigate('/register');
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
                            <h3 style={{ textAlign: 'center' }}>Create Account</h3>
                            <form onSubmit={RegisterUser}>
                                <Box sx={{width:'90%', ml:'1rem' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                                        <TextField fullWidth label="Name" type="text" name='username' />
                                        <TextField fullWidth label="Email" type="email" name='email' />
                                        <TextField fullWidth label="Password" type="password" name='password' />
                                    </Box>
                                </Box>
                                <Button variant="contained" sx={{ ml:'4rem', width: '70%', mt: '1rem', backgroundColor: '#01509a', color: 'white' }} type="submit">Sign Up</Button>
                                <br />
                                <br /><br />
                                <Link href="/login" style={{ color: 'blue', ml:'2rem' }}>Already have an account? Login</Link>
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}