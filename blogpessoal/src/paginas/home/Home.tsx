import React from "react";
import './Home.css';
import { Paper, Button } from '@material-ui/core';
import { Box } from '@mui/material';


function Home() {
    return (
        <>
            <Paper>
                <Box p = {2}>
                    <Box display='flex' justifyContent = 'center' >
                        <h1>Titulo</h1>
                    </Box>
                    <img src="https://i.pinimg.com/564x/69/7a/ac/697aace54eaafee5239962c6d6963891.jpg" alt="imagem de teste" style = {{width:"100%", height: "100%" }}/>
                    <Box display='flex' justifyContent = 'center' p={2}>
                        <Button variant='contained' color='primary'>Texto 1</Button>
                        <Button variant='contained' color='secondary'>Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;