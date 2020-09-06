import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';
const CreateFolderDialog = (props) => {
    const [value, setValue] = React.useState('Untitled Folder');

    const onChangeHandler = function (ev) {
        setValue(ev.target.value);
    }
    return (
        <Dialog open={props.open} onClose={props.handleClose}
            fullWidth={true}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create A New Folder</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Folder Name"
                    type="text"
                    fullWidth
                    value={value}
                    onChange={onChangeHandler}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button disabled={!value} onClick={() => props.createFolderHandler(value)} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateFolderDialog;