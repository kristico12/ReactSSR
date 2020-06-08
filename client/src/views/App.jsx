// dependencies
import React, {Fragment} from 'react';
import { Grid } from '@material-ui/core';

// Components
import TopBar from "../components/topBar.jsx";

function App(props) {
    return (
        <Fragment>
            <Grid container spacing={3}>
                <TopBar/>
                <Grid item xs={12} style={{ backgroundColor: 'blue' }}></Grid>
                <Grid item xs={12} style={{ backgroundColor: 'green' }}></Grid>
            </Grid>
        </Fragment>
    );
}

export default App;