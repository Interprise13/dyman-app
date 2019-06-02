import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import RoutePlate from './RoutePlate';
import Grid from '@material-ui/core/Grid';



const DashboardAdmin = () => {
    return (
        <div>
        <ExpensesSummary headerSummary="Admin Dashboard" />
            <div className="routePlate__root">
                <Grid container spacing={24}>
                    <RoutePlate routeDescription="All Jobs" link="alljobs" />
                    <RoutePlate routeDescription="My Jobs" link="userJobs"/>
                    <RoutePlate routeDescription="Workers" link="workers"/>
                    <RoutePlate routeDescription="Add a Job" link="addJobs"/>
                </Grid>
            </div>
    </div>
    );
};

export default DashboardAdmin;