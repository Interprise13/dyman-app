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
            jobSubTitle: props.job ? props.job.jobSubTitle : '',
            jobParts: props.job ? props.job.jobParts : '',
            note: props.job ? props.job.note : '',
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

onJobSubTitleChange = (e) => {
    const jobSubTitle = e.target.value;
    this.setState(() => ({ jobSubTitle }));
    
};

onJobPartsChange = (e) => {
    const jobParts = e.target.value;
    this.setState(() => ({ jobParts }));
    
};

onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));

};

onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
};
onSubmit = (e) => {
    e.preventDefault();
    
    if(!this.state.company || !this.state.jobTitle) {
        this.setState(() => ({ error: 'Please enter a company and jobtitle' }));
       
       } else {
           this.setState(() => ({ error: ''}));
           // Clear the error
           this.props.onSubmit({
                company: this.state.company,
                jobTitle: this.state.jobTitle,
                jobSubTitle: this.state.jobSubTitle,
                jobParts: this.state.jobParts,
                note: this.state.note,
                
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
                        value={this.state.jobTitle}
                        onChange={this.onJobTitleChange}
                        />
                    <input 
                        type="text"
                        placeholder="Job SubTitle"
                        value={this.state.jobSubTitle}
                        onChange={this.onJobSubTitleChange}
                        />
                    <input 
                        type="text"
                        placeholder="Job Parts"
                        value={this.state.jobParts}
                        onChange={this.onJobPartsChange}
                        />
                    <textarea
                        placeholder="e.g :  wintech A - H: 150(1) + 125(1), L: 600(1) + 550(1)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                        
                    </textarea>
                    <button>Add Job</button>
                </form>
            </div>
        );
    }
}