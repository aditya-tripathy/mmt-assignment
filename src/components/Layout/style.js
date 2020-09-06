import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(theme => ({
    appBar: {
        height: '60px'
    },
    wrapper: {
        display: "flex",
        flexDirection: "column"
    },
    bodyWrapper: {
        display: "flex",
        flexDirection: "row",
        position: 'relative'
    },
    sideNav: {
        height: '100%',
        width: '200px',
        position: 'fixed',
        zIndex: 1,
        top: '60px',
        left: 0,
        backgroundColor: '#fff',
        overflowX: 'hidden',
        padding: '15px 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRight: '1px solid transparent ',
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
    },
    newButton: {
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149) !important',
        alignItems: 'center !important',
        backgroundColor: '#fff !important',
        border: '1px solid transparent !important',
        borderRadius: '24px !important',
        color: '#3c4043 !important',
        display: 'inline-flex !important',
        fontWeight: '500 !important',
        fontSize: '14px !important',
        height: '48px !important',
        letterSpacing: '.15px !important',
        lineHeight: '22px !important',
        margin: '0 !important',
        minWidth: '120px !important',
        padding: '0 24px 0 0 !important',
    },
    body: {
        padding: "10px 20px 0",
        marginLeft: '200px',
        width: '100%'
    },
    inputFile: {
        visibility: 'hidden',
        height: '0px',
        width: '0px'
    }
}))