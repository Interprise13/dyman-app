import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectJobs from '../selectors/jobs';

const ExpenseList = (props) => (
    <div>
        <h1>Jobs list</h1>
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

