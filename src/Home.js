import React from 'react';

// Components
import Navbar from './Layout/components/Navbar';
import Routes from './Layout/components/Routes';
import AddOrder from './Layout/components/AddOrder';
import ViewOrder from './Layout/components/ViewOrder';
import {useDispatch} from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    return(
        <div className="App">
            <Navbar />
            <Routes />
            <AddOrder />
            <ViewOrder />

            <button onClick={() => dispatch({ type: "RESET_ORDERS" })}>Add new Order</button>
        </div>
    );
}