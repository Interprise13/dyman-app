import React from 'react';
import { browserHistory } from 'react-router-dom';


const JobDataItem = ({ id, company, jobParts, jobSubTitle, jobTitle}) => (
    <div>
        <table>
            <tbody>
                <tr className="all-jobs-table__hover">
                    <td>{company}</td>
                    <td>{jobTitle}</td>
                    <td>{jobSubTitle}</td>
                    <td>{id}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default JobDataItem;