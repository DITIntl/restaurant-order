import React from 'react';

// Styles
import './styles/Routes.scss';

export default function Routes() {
    return(
        <div id="routes">
            <div className="container">
                <div className="links">
                    <input type="submit" value="Add meal" />
                    <input type="submit" value="Add Order" />
                    <input type="submit" value="Reports" />
                </div>
            </div>
        </div>
    );
}