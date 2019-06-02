import React from 'react';
import { browserHistory } from 'react-router-dom';


const JobDataItem = ({ id, company, jobParts, jobSubTitle, jobTitle, status}) => (
    <div className="job-item__render">
        <table>
            <tbody>
                <tr className="all-jobs-table__hover">
                    <td className="all-job__link">{company}</td>
                    <td className="all-job__link">{jobTitle}</td>
                    <td className="all-job__link">{jobSubTitle}</td>
                    <td className="all-job__link">{id}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default JobDataItem;