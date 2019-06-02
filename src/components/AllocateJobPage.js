import React from 'react';
import { connect } from 'react-redux';
import ExpensesSummary from './ExpensesSummary';
import AllocateJobForm from './AllocateJobForm';
import { startAllocateJob } from '../actions/jobs';

const AllocateJobPage = (props) => {
        return(
            <div>
                <ExpensesSummary headerSummary="Allocate Jobs"/>
                <AllocateJobForm
                    buttonDesc="Allocate"
                    job={props.job}
                    onSubmit={(job) => {
                        props.dispatch(startAllocateJob(job));
                        props.history.push('/dashboard');
                }}
                />
            </div>
        ); 
}

const mapStateToProps = (state, props) => {
    return {
        job: state.jobs.find((job) => job.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(AllocateJobPage);