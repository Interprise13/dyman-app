import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import JobDataTable from './JobDataTable';

const AllJobs = () => (
            <div>
                <ExpensesSummary headerSummary="All Jobs"/>
                <JobDataTable />
            </div>
);

export default AllJobs;