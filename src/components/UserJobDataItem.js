import React from 'react';
import { browserHistory } from 'react-router-dom';


class UserJobDataItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            statusCol: ''
        };
    };
    componentDidMount(){
        this.statusColPick();
    };
    statusColPick = () => {
        if(this.props.status !== 'Ready For Fab' && this.props.status !== 'Finished'){
            this.setState(() => ({ statusCol: 'linear-gradient(to top, rgba(0, 255, 247, 0.5) 0%, rgba(255,255,255, 1) 100%)' }))
        }
        else if (this.props.status === 'Finished'){
            this.setState(() => ({ statusCol: 'linear-gradient(to top, rgba(0, 255, 140, 0.5) 0%, rgba(255,255,255, 1) 100%)'}))
        }
        else {
            this.setState(() => ({ statusCol: 'linear-gradient(to top, rgba(255, 0, 0, 0.5) 0%, rgba(255,255,255, 1) 100%)'}))
        }
        
    }
    render() {
        console.log(this.state.statusCol);
        return (
            <div className="all-jobs-table__hover" style={{background: `${this.state.statusCol}`, transition: 'all ease .5s'}}>
                <table>
                    <tbody>
                        <tr className="all-jobs-table__hover">
                            <td>{this.props.company}</td>
                            <td>{this.props.jobTitle}</td>
                            <td>{this.props.jobSubTitle}</td>
                            <td>{this.props.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default UserJobDataItem;