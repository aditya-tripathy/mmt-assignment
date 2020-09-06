import React from 'react';
import './style.js';
import Layout from '../../components/Layout';
import { Box, Grid, Paper, Breadcrumbs, Typography, Link } from '@material-ui/core';
import { useStyles } from './style';
import { useSelector } from 'react-redux';
import { singleFolderData, selectAllData, breadCrumpData, currentFolderData } from '../../redux/StoreData/store-selector.js';
import FolderIcon from '@material-ui/icons/Folder';

const Folders = (props) => {
    const classes = useStyles();
    const folderData = useSelector(state => singleFolderData(state, props.match.params.id || null));
    console.log('folderData: ', folderData);
    const fileData = useSelector(state => currentFolderData(state, props.match.params.id || null));
    console.log('fileData: ', fileData);
    const breadCrumArray = useSelector(state => breadCrumpData(state, props.match.params.id || null))

    const folderOpenHandler = (data) => {
        props.history.push('/folders/' + data.id);
    }

    return (
        <Layout>
            <Box className={classes.wrapper}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="textPrimary">You are now</Typography>
                    {breadCrumArray.length > 0 &&
                        breadCrumArray.map((it, i, arr) => {
                            if (arr.length - 1 === i) {
                                return <Typography key={it.id} color="textPrimary">{it.name}</Typography>
                            } else {
                                return (<Link color="inherit" key={it.id} onClick={() => folderOpenHandler(it)}>
                                    {it.name}
                                </Link>)
                            }
                        })
                    }

                </Breadcrumbs>
                <Grid container spacing={0}>
                    {folderData.map(item => <Grid key={item.id} item xs={4}>
                        <Paper className={classes.paper} onDoubleClick={() => folderOpenHandler(item)}>
                            <FolderIcon />
                            <span>{item.name}</span>
                        </Paper>
                    </Grid>)}
                </Grid>
                {fileData && fileData.data && <Typography color="textPrimary">Files</Typography>}
                <Grid container spacing={0}>
                    {fileData && fileData.data && fileData.data.map(item => <Grid key={item.id} item xs={4}>
                        <Paper className={classes.paperBox} onDoubleClick={() => folderOpenHandler(item)}>
                            <FolderIcon />
                            <span>{item.name}</span>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Box>
        </Layout>
    );
}

export default Folders;