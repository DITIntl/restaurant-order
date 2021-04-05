import React from 'react';

// Components
import Navbar from './Layout/components/Navbar';
import Routes from './Layout/components/Routes';
import AddOrder from './Layout/components/AddOrder';

export default function Home() {
    return(
        <div className="App">
            <Navbar />
            <Routes />
            <AddOrder />
        </div>
    );
}