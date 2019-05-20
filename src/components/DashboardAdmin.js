import React from 'react';
import { Link } from 'react-router-dom';
import ExpensesSummary from './ExpensesSummary';
import RoutePlate from './RoutePlate';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const DashboardAdmin = () => {
    return (
        <div>
        <ExpensesSummary headerSummary="Admin Dashboard" />
            <div className="routePlate__root">
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <Link className="routePlate__link"to="/allJobs">
                            <Paper className="routePlate__paper">
                                <div className="routePlate__title">All Jobs</div>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link className="routePlate__link"to="/allJobs">
                            <Paper className="routePlate__paper">
                                <div className="routePlate__title">All Jobs</div>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={3} className="routePlate__grid">
                        <Link className="routePlate__link"to="/allJobs">
                            <Paper className="routePlate__paper">
                                <div className="routePlate__title">All Jobs</div>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link className="routePlate__link"to="/allJobs">
                            <Paper className="routePlate__paper">
                                <div className="routePlate__title">All Jobs</div>
                            </Paper>
                        </Link>
                    </Grid>
                </Grid>
            </div>
    </div>
    );
};

export default DashboardAdmin;