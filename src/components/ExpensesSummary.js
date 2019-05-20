import React from 'react';
import RoutePlate from './RoutePlate';


const ExpensesSummary = ({ headerSummary }) => {
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">{headerSummary}</h1>
                <div className="page-header__actions">
                </div>
            </div>
        </div>
    );
};

export default ExpensesSummary;