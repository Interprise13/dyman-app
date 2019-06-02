import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// const date = new Date();

export default class AllocateJobForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            company: props.job ? props.job.company : '',
            jobTitle: props.job ? props.job.jobTitle : '',
            jobSubTitle: props.job ? props.job.jobSubTitle : '',
            jobGrade: props.job ? props.job.jobGrade : '',
            jobParts: props.job ? props.job.jobParts : '',
            note: props.job ? props.job.note : '',
            allocate: props.job ? props.job.allocate : '',
            status: props.job ? props.job.status : '',
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

onJobGradeChange = (e) => {
    const jobGrade = e.target.value;
    this.setState(() => ({ jobGrade }));
    
};

onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));

};
onAllocateChange = (e) => {
    const allocate = e.target.value;
    this.setState(() => ({ allocate }));

};
onStatusChange = (e) => {
    const status = e.target.value;
    this.setState(() => ({ status }));
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
                jobGrade: this.state.jobGrade,
                jobParts: this.state.jobParts,
                note: this.state.note,
                allocate: this.state.allocate,
                status: this.state.status
                
           });
       }
}

    render() {
        return (
            <div className="expenseForm">
                {this.state.error && <p>{this.state.error}</p>}
                <Row gutter={40}>
                    <Col 
                        xs={{ span: 12}} 
                        sm={{ span: 4 }} 
                        md={{ span: 4 }} 
                        lg={{ span: 4 }} 
                        xl={{ span: 4 }}
                        >
                        <form onSubmit={this.onSubmit}>
                            <div className="expenseForm__input">
                                <input
                                    className="allocate-input"
                                    type="text"
                                    placeholder="Company"
                                    autoFocus
                                    value={this.state.company}
                                    onChange={this.onCompanyChange}
                                />
                                <input
                                    className="allocate-input"
                                    type="text"
                                    placeholder="Job Title"
                                    value={this.state.jobTitle}
                                    onChange={this.onJobTitleChange}
                                    />
                                <input
                                    className="allocate-input"
                                    type="text"
                                    placeholder="Job SubTitle"
                                    value={this.state.jobSubTitle}
                                    onChange={this.onJobSubTitleChange}
                                    />
                                <input
                                    className="allocate-input"
                                    type="text"
                                    placeholder="Job Grade"
                                    value={this.state.jobGrade}
                                    onChange={this.onJobGradeChange}
                                    />
                                <input
                                    className="allocate-input"
                                    type="text"
                                    placeholder="Job Parts"
                                    value={this.state.jobParts}
                                    onChange={this.onJobPartsChange}
                                    />
                                <input
                                    className="allocate-input"
                                    type="text"
                                    placeholder="Allocate to"
                                    value={this.state.allocate}
                                    onChange={this.onAllocateChange}
                                    />

                                <textarea
                                    placeholder="e.g :  wintech A - H: 150(1) + 125(1), L: 600(1) + 550(1)"
                                    value={this.state.note}
                                    onChange={this.onNoteChange}
                                    >
                                </textarea>
                                <select 
                                    placeholder="status of job"
                                    onChange={this.onStatusChange}>
                                    <option value="">Select Status</option>
                                    <option>New Job</option>
                                    <option>To Be Bundled</option>
                                    <option>To Be Angled</option>
                                    <option>To Be Laced</option>
                                    <option>To Be Temp Cut</option>
                                    <option>Finished</option>
                                </select>
                                <button>{this.props.buttonDesc}</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
            
        );
    }
}
