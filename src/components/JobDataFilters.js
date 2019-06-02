import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

class JobDataFilters extends React.Component {
    render() {
        return(
            <div className="job-data__filter">
                <label className="inp">
                    <input 
                        className="job-data__filter__input"
                        type="text" 
                        id="inp" 
                        placeholder="filter" 
                        value={this.props.filters.text} 
                        onChange={(e) => {  this.props.dispatch(setTextFilter(e.target.value)); }}
                        />
                        <span className="border"></span>
                </label>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
    
};
export default connect(mapStateToProps)(JobDataFilters);