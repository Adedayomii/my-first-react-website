import { Header } from "../Shared/Header";
import './order.css';
import ImageOne from '/images/products/2-slot-toaster-white.jpg';

export function Order () {
    return (
        <>
            <Header />
            <div>
                <div className="orders-container">
                    <div className="your-order">Your Orders</div>
                    <div className="order-details">
                        <div className="first-container">
                            <div className="order-placed"><p className="order_placed">Order Placed:</p>
                                <p>June 12</p>
                            </div>
                            <div className="total-section">
                                <p className="order_placed">Total:</p>
                                <p>$124.01</p>
                            </div>
                            <div>
                                <p className="order_placed">Order ID:</p>
                                <p>85230ca7-7a53-4654-9c3c-4c80c3d5eb9f</p>
                            </div>
                        </div>

                        
                        <div className="second-container">
                            <div className="first-product">
                                <div className="left-section">
                                    <img src={ImageOne} className="imageone"/>
                                </div>
                                <div className="middle_section">
                                    <p className="productName">2 Slot Toaster White color</p>
                                    <p className="arrivaldate">Arriving on: June 23</p>
                                    <p className="arrivaldate">Quantity: 5</p>
                                    <button className="add_to_cart_orderPage">Add to Cart</button>
                                </div>
                                
                                <div className="right-section">
                                    <button className="track_package_button">Track package</button>
                                </div>
                            </div>

                                             
                        </div>

                        <div className="second-container">
                            <div className="first-product">
                                <div className="left-section">
                                    <img src={ImageOne} className="imageone"/>
                                </div>
                                <div className="middle_section">
                                    <p className="productName">2 Slot Toaster White color</p>
                                    <p className="arrivaldate">Arriving on: June 23</p>
                                    <p className="arrivaldate">Quantity: 5</p>
                                    <button className="add_to_cart_orderPage">Add to Cart</button>
                                </div>
                                
                                <div className="right-section">
                                    <button className="track_package_button">Track package</button>
                                </div>
                            </div>

                                             
                        </div>

                    </div>
                    
                </div>

                <div className="orders-container">
                    <div className="order-details">
                        <div className="first-container">
                            <div className="order-placed"><p className="order_placed">Order Placed:</p>
                                <p>June 12</p>
                            </div>
                            <div className="total-section">
                                <p className="order_placed">Total:</p>
                                <p>$124.01</p>
                            </div>
                            <div>
                                <p className="order_placed">Order ID:</p>
                                <p>85230ca7-7a53-4654-9c3c-4c80c3d5eb9f</p>
                            </div>
                        </div>

                        
                        <div className="second-container">
                            <div className="first-product">
                                <div className="left-section">
                                    <img src={ImageOne} className="imageone"/>
                                </div>
                                <div className="middle_section">
                                    <p className="productName">2 Slot Toaster White color</p>
                                    <p className="arrivaldate">Arriving on: June 23</p>
                                    <p className="arrivaldate">Quantity: 5</p>
                                    <button className="add_to_cart_orderPage">Add to Cart</button>
                                </div>
                                
                                <div className="right-section">
                                    <button className="track_package_button">Track package</button>
                                </div>
                            </div>

                                             
                        </div>

                        <div className="second-container">
                            <div className="first-product">
                                <div className="left-section">
                                    <img src={ImageOne} className="imageone"/>
                                </div>
                                <div className="middle_section">
                                    <p className="productName">2 Slot Toaster White color</p>
                                    <p className="arrivaldate">Arriving on: June 23</p>
                                    <p className="arrivaldate">Quantity: 5</p>
                                    <button className="add_to_cart_orderPage">Add to Cart</button>
                                </div>
                                
                                <div className="right-section">
                                    <button className="track_package_button">Track package</button>
                                </div>
                            </div>

                                             
                        </div>

                    </div>
                    
                </div>


            </div>
        
        </>
    );
}