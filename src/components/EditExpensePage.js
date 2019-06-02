import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditJob, startRemoveJob } from '../actions/jobs';


const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                buttonDesc="Confirm"
                job={props.job}
                onSubmit={(job) => {
                    props.dispatch(startEditJob(props.job.id, job));
                    props.history.push('/dashboard');
                }}
                />
            <button onClick={() => {
                props.dispatch(startRemoveJob({id: props.job.id}));
                props.history.push('/dashboard');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {                            
        job: state.jobs.find((job) => job.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);
