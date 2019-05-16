import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectJobs from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.jobs.map((job) => {
            return <ExpenseListItem key={job.id}{...job}/>
        })}
    
    </div>
);

const mapStateToProps = (state) => {
    return {
        jobs: selectJobs(state.jobs, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

