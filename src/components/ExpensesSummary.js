import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectJobs from '../selectors/expenses';
import selectJobsTotal from '../selectors/expenses-total';
import RoutePlate from './RoutePlate';


const ExpensesSummary = ({ jobCount, jobTotal, headerSummary }) => {
    
    const jobWord = jobCount === 1 ? 'job' : 'jobs' ;
    const formattedJobTotal = numeral(jobTotal / 100).format('$0,0.00');
    
    
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">{headerSummary}</h1>
                <div className="page-header__actions">
                    <Link className="page-header__button" to="/currentDashboard">View Jobs</Link>
                </div>
            </div>
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