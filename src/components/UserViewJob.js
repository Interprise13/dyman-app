import React from 'react';
import { connect } from 'react-redux';
import UserViewJobForm from './UserViewJobForm';
import { startUpdateAllocated, startRemoveJob } from '../actions/jobs';


const UserViewJob = (props) => {
    console.log(props)
    return (
        <div>
            <UserViewJobForm 
                buttonDesc="Update"
                job={props.job}
                onSubmit={(job) => {
                    if(job.status !== "Ready For Fab") {
                        props.dispatch(startUpdateAllocated(props.job.id, job));
                        props.history.push('/dashboard');
                    } else {
                        props.dispatch(startRemoveJob({id: props.job.id}));
                        props.history.push('/userjobs')
                    }
        
                }}
                />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {                            
        job: state.jobs.find((job) => job.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(UserViewJob);