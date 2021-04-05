import React from 'react';

// Styles
import './styles/ViewOrder.scss';
import {useSelector} from "react-redux";

export default function ViewOrder() {
    const orders = useSelector(state => state.orders.order);
    let total = 0;
    return(
        <div id="view-order">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Q</th>
                            <th>Price</th>
                            <th>Addons</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders?.map((o, id) => {
                        total += o.totalPrice
                        return <tr key={id}>
                            <td>{o?.category + " / " + o.meal}</td>
                            <td>{o?.quantity}</td>
                            <td>{o?.price}</td>
                            <td>{o?.type}</td>
                            <td>{o?.totalPrice}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <div className="total">
                    <h2>Total L.E: {total}</h2>
                </div>
            </div>
        </div>
    );
}