import React from 'react';

const RoutePlate = ({routeDescription}) => {
    return(
        <div className="routePlate__box">
            <div className="routePlate__description">
                <p>{routeDescription}</p>
            </div>
        </div>
        
    );
};

export default RoutePlate;