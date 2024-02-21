import React from "react";
import { Button, Grid, Input, Link, TextField } from '@mui/material'
import { Box } from "@mui/material";

export default function FBConnectPage() {
    return (
        <>
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
                            <h3 style={{ textAlign: 'center' }}>Facebook Page Integreation</h3>
                                <Box sx={{width:'90%', ml:'1rem' }}>
                                    
                                </Box>
                                <Button variant="contained" sx={{ ml:'4rem', width: '70%', mt: '1rem', backgroundColor: '#01509a', color: 'white' }} type="submit">Connect Page</Button>
                                <br />
                                <br /><br />
                            
                        </Box>
                        
                    </Box>
                </Grid>
            </Grid>
        </>
        </>
    )
}
