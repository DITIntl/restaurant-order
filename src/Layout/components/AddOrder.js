import React, {useState} from 'react';

// Styles
import './styles/AddOrder.scss';
import {useDispatch} from "react-redux";
import {createOrder} from '../../utilize/actions';

export default function AddOrder() {
    const dispatch = useDispatch();
    const [placeOrder, setPlaceOrder] = useState({ category: "", meal: "", quantity: 0, type: "", price: 0, totalPrice: 0 })
    const [selectedCat, setSelectedCat] = useState("Category #1");
    const cats = {
        "Category #1": [
            {id: 1, name: "Category #1 - Meal ##1", price: 120},
            {id: 2, name: "Category #1 - Meal ##2", price: 120},
            {id: 3, name: "Category #1 - Meal ##3", price: 120},
            {id: 4, name: "Category #1 - Meal ##4", price: 120}
        ],
        "Category #2": [
            {id: 1, name: "Category #2 - Meal ##1", price: 120},
            {id: 2, name: "Category #2 - Meal ##2", price: 120},
            {id: 3, name: "Category #2 - Meal ##3", price: 120},
            {id: 4, name: "Category #2 - Meal ##4", price: 120}
        ]
    }

    return(
        <div id="add-order">
            <div className="container">
                <div className="order">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="category">
                                <label htmlFor="/">Category</label>
                                <select className="order-items" onChange={(e) => {
                                    setSelectedCat(e.target.value);
                                    setPlaceOrder({ ...placeOrder, category: e.target.value });
                                }}>
                                    {Object.keys(cats)?.map(k => <option value={k} key={k}>{k}</option>)}
                                </select>
                            </div>
                            <div className="meal">
                                <label htmlFor="/">Meal</label>
                                <select className="meal-items" onChange={(e) => {
                                    setPlaceOrder({ ...placeOrder, meal: e.target.value });
                                }}>
                                    {cats[selectedCat]?.map(m => <option value={m.name} key={m.id}>{m.name}</option>)}
                                </select>
                            </div>
                            <div className="quantity">
                                <label htmlFor="/">Q</label>
                                <input className="quantity" type="text" onChange={(e) => {
                                    cats[selectedCat].map(i => i.name === placeOrder.meal ? setPlaceOrder({ ...placeOrder, quantity: parseInt(e.target.value), totalPrice: parseInt(e.target.value) * i.price, price: i.price }) : null);
                                }}/>
                            </div>
                        </div>
                        <div className="col-lg-4 center">
                            <div className="combo">
                                <input id="combo" type="checkbox" onChange={(e) => {
                                    setPlaceOrder({ ...placeOrder, type: "Combo" });
                                }}/>
                                <label htmlFor="combo">Combo - add 2L.E</label>
                            </div>
                            <div className="spicy">
                                <input id="spicy" type="checkbox" onChange={(e) => {
                                    setPlaceOrder({ ...placeOrder, type: "Spicy" });
                                }}/>
                                <label htmlFor="spicy">Spicy - add 1L.E</label>
                            </div>
                            <div className="price">
                                <h2>Price L.E</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="add-btn">
                                <button className="btn btn-primary" onClick={() => {
                                    if (placeOrder.category.length > 1 && placeOrder.meal.length > 1 && placeOrder.quantity > 0) {
                                        dispatch(createOrder(placeOrder));
                                    } else {
                                        alert("Complete order data");
                                    }
                                    setPlaceOrder({ category: "", meal: "", quantity: 0, price: 0, totalPrice: 0 });
                                }}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}