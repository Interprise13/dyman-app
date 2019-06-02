import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserJobDataItem from './UserJobDataItem';
import {startGetAllocatedJobs} from '../actions/jobs';
import selectAllocate from '../selectors/getAllocateJobs';

class UserJobData extends React.Component {
    
    componentDidMount() {
        this.props.startGetAllocatedJobs();
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
                        <th>Status</th>
                    </tr>
                </tbody>
            </table>
            <div>
                {this.props.selectAllocate.map((job) => {
                    return (
                        <Link className="job-item__link" to={`/userview/${job.id}`}>
                            <UserJobDataItem key={job.id}{...job}/>
                        </Link>
                )
            })}
            </div>
        </div>
    );
    }; 
};


const mapStateToProps = (state) => {
    return {
        selectAllocate: selectAllocate(state.jobs, state.filters),
        job: state.jobs
    };
    
};
const mapDispatchToProps = (dispatch) => {
    return {
        startGetAllocatedJobs: () => dispatch(startGetAllocatedJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserJobData);
