import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JobDataItem from './JobDataItem';
import {startGetJobs, getJobs} from '../actions/jobs';

class JobData extends React.Component {
    
    componentDidMount() {
        this.props.startGetJobs();
        console.log(this.props); 
    }
    
    render() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Job Sub Title</th>
                        <th>Assigned To</th>
                    </tr>
                </tbody>
            </table>
          {this.props.jobs.map((job) => {
            return (
                    <Link to={`/edit/${job.id}`}>
                        <JobDataItem key={job.id}{...job}/>
                    </Link>
                )
            })}
        </div>
    );
    }; 
};


const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    };
    
};
const mapDispatchToProps = (dispatch) => {
    return {
        startGetJobs: () => dispatch(startGetJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobData);

