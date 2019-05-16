import React from 'react';
import { connect } from 'react-redux'
import numeral from 'numeral';
import selectJobs from '../selectors/expenses';
import selectJobsTotal from '../selectors/expenses-total';


const ExpensesSummary = ({ jobCount, jobTotal }) => {
    
    const jobWord = jobCount === 1 ? 'job' : 'jobs' ;
    const formattedJobTotal = numeral(jobTotal / 100).format('$0,0.00');
    
    
    return(
        <div>
            <h1>Viewing {jobCount} {jobWord} totalling {formattedJobTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleJobs = selectJobs(state.jobs, state.filters);
    
    return {
        jobCount: visibleJobs.length,
        jobTotal: selectJobsTotal(visibleJobs)
    };
};

export default connect(mapStateToProps)(ExpensesSummary)