import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            company: props.job ? props.job.company : '',
            jobTitle: props.job ? props.job.jobTitle : '',
            note: props.job ? props.job.note : '',
            amount: props.job? (props.job.amount / 100).toString() : '',
            createdAt: props.job ? moment(props.job.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    
onCompanyChange = (e) => {
    const company = e.target.value;
    this.setState(() => ({ company }));
    
};
onJobTitleChange = (e) => {
    const jobTitle = e.target.value;
    this.setState(() => ({ jobTitle }));
    
};

onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));

};
onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount }));
        }
};
onDateChange = (createdAt) => {
    if(createdAt) {
        this.setState(() => ({ createdAt }));
    }
};
onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
};
onSubmit = (e) => {
    e.preventDefault();
    
    if(!this.state.company || !this.state.amount) {
        this.setState(() => ({ error: 'Please enter a description and amount' }));
       
       } else {
           this.setState(() => ({ error: ''}));
           // Clear the error
           this.props.onSubmit({
                company: this.state.company,
                jobTitle: this.state.jobTitle,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
           });
       }
}

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Company"
                        autoFocus
                        value={this.state.company}
                        onChange={this.onCompanyChange}
                        />
                    <input
                        type="text"
                        placeholder="Job Title"
                        autoFocus
                        value={this.state.jobTitle}
                        onChange={this.onJobTitleChange}
                        />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />
                    <textarea
                        placeholder="e.g :  wintech A - H: 150(1) + 125(1), L: 600(1) + 550(1)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                        
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}