import React from 'react';
import './style.js';
import Layout from '../../components/Layout';
import { Box, Grid, Paper } from '@material-ui/core';
import { useStyles } from './style';
import { useSelector } from 'react-redux';
import { selectAllHomeData } from '../../redux/StoreData/store-selector.js';
import FolderIcon from '@material-ui/icons/Folder';
const Home = (props) => {
    const classes = useStyles();
    const allFolderData = useSelector(state => selectAllHomeData(state))
    console.log('allFolderData: ', typeof allFolderData);

    const folderOpenHandler = (data) => {
        console.log('data: ', data);
        props.history.push('/folders/' + data.id);
    }
    return (
        <Layout>
            <Box className={classes.wrapper}>
                <h1>Folders</h1>
                <Grid container spacing={0}>
                    {allFolderData.map(item => <Grid key={item.id} item xs={4}>
                        <Paper className={classes.paper} onDoubleClick={() => folderOpenHandler(item)}>
                            <FolderIcon />
                            <span>{item.name}</span>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Box>
        </Layout>
    );
}

export default Home;