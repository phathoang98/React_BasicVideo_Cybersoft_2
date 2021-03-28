import { makeStyles } from '@material-ui/core/styles';


const styleHeader = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        background: 'skyblue'
    }
}));

export default styleHeader;