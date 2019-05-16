import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editJob, removeJob } from '../actions/expenses';


const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                job={props.job}
                onSubmit={(job) => {
                    props.dispatch(editJob(props.job.id, job));
                    props.history.push('/');
                }}
                />
            <button onClick={() => {
                props.dispatch(removeJob({id: props.job.id}));
                props.history.push('/');
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
