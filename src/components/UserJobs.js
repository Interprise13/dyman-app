import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import UserJobData from './UserJobData';

const UserJobs = () => (
            <div>
                <ExpensesSummary headerSummary="My Jobs"/>
                <UserJobData />
            </div>
);

export default UserJobs;