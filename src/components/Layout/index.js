import React, { useRef } from 'react';
import { useStyles } from "./style";

import { withRouter } from "react-router-dom";
import { AppBar, Button, withStyles, ListItemIcon, ListItemText } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import CreateFolderDialog from '../CreateFolderDialog';
import { useDispatch } from 'react-redux';
import StoreAction from '../../redux/StoreData/store-action';
import shortid from 'shortid';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

function Layout(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const inputFileRef = useRef(null);
    const createFolder = (name, parentId) => dispatch(StoreAction.setFolderData(name, parentId));
    const createFile = (file, eleId) => dispatch(StoreAction.setFileData(file, eleId));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showCreateModal, setShowCreateModal] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openCreateModalHandler = () => {
        handleClose(null);
        setShowCreateModal(value => !value);
    }

    const openFileUploadHandler = () => {
        openCreateModalHandler();
        inputFileRef.current.click()
    }

    const handleFileChange = event => {
        let file = event.currentTarget.files[0];
        createFile({
            name: file.name,
            type: file.type,
            size: file.size,
            id: shortid.generate(),
        }, props.match.params.id);
    }

    const createFolderHandler = (folderName) => {
        if (props.match.path === '/home') {
            createFolder(folderName);
        } else {
            createFolder(folderName, props.match.params.id);
        }
        openCreateModalHandler();
    }
    return (
        <div className={classes.wrapper}>
            <AppBar position="static" color='secondary' className={classes.appBar}>

            </AppBar>
            <div className={classes.bodyWrapper}>
                <nav className={classes.sideNav}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.newButton}
                        startIcon={<AddIcon />}
                        onClick={handleClick}>
                        New
                    </Button>
                    <StyledMenu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={openCreateModalHandler}>
                            <ListItemIcon>
                                <CreateNewFolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Folder" />
                        </MenuItem>
                        {props.match.params.id &&
                            <MenuItem onClick={openFileUploadHandler}>
                                <ListItemIcon>
                                    <CreateNewFolderIcon />
                                </ListItemIcon>
                                <ListItemText primary="File Upload" />
                                <input type="file" ref={inputFileRef}
                                    onChange={(e) => handleFileChange(e)}
                                    className={classes.inputFile} />
                            </MenuItem>
                        }
                    </StyledMenu>
                </nav>
                <main className={classes.body}>
                    {showCreateModal && <CreateFolderDialog
                        createFolderHandler={createFolderHandler}
                        open={showCreateModal}
                        handleClose={openCreateModalHandler}
                    />}
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default withRouter(Layout)
