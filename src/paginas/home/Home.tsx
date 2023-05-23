import React from 'react';
import './Home.css';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import ListaPostagens from '../../components/postagens/listapostagens/ListaPostagem';
import TabPostagem from '../../components/postagens/tabpostagens/TabPostagens';


function Home() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="contained" className="botaoMouse">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
            <ListaPostagens />
        </>
    )
}

export default Home;