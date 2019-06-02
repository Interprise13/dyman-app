import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddJob } from '../actions/jobs';

export class AddExpensePage extends React.Component {
    onSubmit = (job) => {
        this.props.startAddJob(job);
        this.props.history.push('/dashboard');
    };
    render() {
        return(
            <div>
                <h1> Add Job</h1>
                <ExpenseForm
                    buttonDesc="Add Job"
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddJob: (job) => dispatch(startAddJob(job))
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);