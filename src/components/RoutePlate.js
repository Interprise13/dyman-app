import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const RoutePlate = ({routeDescription, link, onClick}) => {
    return(
        <Grid item xs={3}>
            <Link className="routePlate__link" to={`/${link}`}>
                <Paper className="routePlate__paper">
                    <div className="routePlate__title">
                        <span>{routeDescription}</span>
                    </div>
                </Paper>
            </Link>
        </Grid>
    );
};

export default RoutePlate;