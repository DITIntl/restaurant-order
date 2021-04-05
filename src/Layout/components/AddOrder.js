import React from 'react';

// Styles
import './styles/AddOrder.scss';

export default function AddOrder() {
    return(
        <div id="add-order">
            <div className="container">
                <div className="order">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="category">
                                <label htmlFor="/">Category</label>
                                <select className="order-items">
                                    <option value="Rice">Rice</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Salad">Salad</option>
                                </select>
                            </div>
                            <div className="meal">
                                <label htmlFor="/">Meal</label>
                                <select className="meal-items">
                                    <option value="Rice">Rice</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Salad">Salad</option>
                                </select>
                            </div>
                            <div className="quantity">
                                <label htmlFor="/">Q</label>
                                {/*<div className="quantity-box">*/}
                                    <input className="quantity" type="text" />
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-lg-4 center">
                            <div className="combo">
                                <input type="checkbox" />
                                <label htmlFor="/">Combo - add 2L.E</label>
                            </div>
                            <div className="spicy">
                                <input type="checkbox" />
                                <label htmlFor="/">Spicy - add 1L.E</label>
                            </div>
                            <div className="price">
                                <h2>Price L.E</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="add-btn">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}