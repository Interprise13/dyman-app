import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({ id, company, jobTitle, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{company}</h3>
        </Link>
        <p>{jobTitle}</p>
    </div>
);

export default ExpenseListItem;