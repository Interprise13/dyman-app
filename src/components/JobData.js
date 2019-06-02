import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JobDataFilters from './JobDataFilters';
import JobDataItem from './JobDataItem';
import {startGetJobs, getJobs} from '../actions/jobs';
import selectJobs from '../selectors/jobs';

class JobData extends React.Component {
    
    componentDidMount() {
        this.props.startGetJobs();
        console.log(this.props); 
    }
    
    render() {
    return (
        <div>
            <JobDataFilters />
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Job Sub Title</th>
                        <th>Job Id</th>
                    </tr>
                </tbody>
            </table>
          {this.props.selectJobs.map((job) => {
            return (
                    <Link className="job-item__link" to={`/edit/${job.id}`}>
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
        selectJobs: selectJobs(state.jobs, state.filters),
        jobs: state.jobs,
    };
    
};
const mapDispatchToProps = (dispatch) => {
    return {
        startGetJobs: () => dispatch(startGetJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobData);

