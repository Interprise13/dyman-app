import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// const date = new Date();

export default class UserViewJobForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            company: props.job.company,
            jobTitle: props.job.jobTitle,
            jobSubTitle: props.job.jobSubTitle,
            jobGrade: props.job.jobGrade,
            jobParts: props.job.jobParts,
            note: props.job.note,
            status: props.job.status ? props.job.status : '',
            error: ''
        };
    }
    onStatusChange = (e) => {
    const status = e.target.value;
    this.setState(() => ({ status }));
    };
    
onSubmit = (e) => {
    e.preventDefault();
    
    if(!this.state.status) {
        this.setState(() => ({ error: 'Please enter the current status' }));
       
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
                                type="text"
                                placeholder="Company"
                                defaultValue={this.state.company}
                                />
                            <input
                                type="text"
                                placeholder="Job Title"
                                defaultValue={this.state.jobTitle}
                                />
                            <input 
                                type="text"
                                placeholder="Job SubTitle"
                                defaultValue={this.state.jobSubTitle}
                                />
                            <input 
                                type="text"
                                placeholder="Job Grade"
                                defaultValue={this.state.jobGrade}
                                />
                            <input 
                                type="text"
                                placeholder="Job Parts"
                                defaultValue={this.state.jobParts}
                                />
                                
                            <textarea
                                placeholder="e.g :  wintech A - H: 150(1) + 125(1), L: 600(1) + 550(1)"
                                defaultValue={this.state.note}
                                onChange={this.onNoteChange}>
                            </textarea>
                                <select onChange={this.onStatusChange}>
                                    <option>{this.state.status}</option>
                                    <option>To Be Bundled</option>
                                    <option>To Be Angled</option>
                                    <option>To Be Laced</option>
                                    <option>To Be Temp Cut</option>
                                    <option>Ready For Fab</option>
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