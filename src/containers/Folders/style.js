import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    wrapper: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        margin: "10px",
        display: 'flex',
        alignItems: 'center',
        '& span': {
            marginLeft: '12px',
        }
    },
    paperBox: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        margin: "10px",
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        border: '1px solid #f4f4f4',
        '& span': {
            marginLeft: '12px',
        }
    },
}));