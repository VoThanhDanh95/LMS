import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    container: {
        "max-height": "100vh",
        "overflow-y": "auto",
    },
});

const RootLayout = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <NavBar />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout