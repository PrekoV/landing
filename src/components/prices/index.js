import React, { Component } from 'react';

class Prices extends Component {

    render() {
        const { prices } = this.props
        return (
            <div className="Prices">
                <div className="section5_wrapper">
                    {
                        prices.map((item, id) => {
                            return (
                                <div key={id} className="price">
                                    <h2 className="title">{item.title}</h2>
                                    <div className="in_month">
                                        <sup>$</sup>
                                        <span>{item.inMonth}</span>
                                        <span className="per_month">Per month</span>
                                    </div>
                                    <ul className="instructions">
                                        {
                                            item.instructions.map(elem => {
                                                return (
                                                    <li key={elem} className="text">{elem}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button className="order">ORDER NOW</button>
                                </div>
                            )
                        })
                    }
                    {/* <div className="price">
                        <h2 className="title">SHARED</h2>
                        <div className="in_month">
                            <sup>$</sup>
                            <span>18.00</span>
                            <span className="per_month">Per month</span>
                        </div>
                        <ul className="instructions">
                            <li className="text">Concurrent Domain</li>
                            <li className="text">Theme Updates</li>
                            <li className="text">500 GB Disk Space</li>
                            <li className="text">100 Databases List</li>
                            <li className="text">Free Domain Registration</li>
                            <li className="text">1 Hosting Space</li>
                        </ul>
                        <button className="order">ORDER NOW</button>
                    </div>
                    <div className="price">
                        <h2 className="title">RESELLER</h2>
                        <div className="in_month">
                            <sup>$</sup>
                            <span>150.00</span>
                            <span className="per_month">Per month</span>
                        </div>
                        <ul className="instructions">
                            <li className="text">Concurrent Domain</li>
                            <li className="text">Theme Updates</li>
                            <li className="text">500 GB Disk Space</li>
                            <li className="text">100 Databases List</li>
                            <li className="text">Free Domain Registration</li>
                            <li className="text">1 Hosting Space</li>
                        </ul>
                        <button className="order">ORDER NOW</button>
                    </div>
                    <div className="price">
                        <h2 className="title">DEDICATED</h2>
                        <div className="in_month">
                            <sup>$</sup>
                            <span>1200.00</span>
                            <span className="per_month">Per month</span>
                        </div>
                        <ul className="instructions">
                            <li className="text">Concurrent Domain</li>
                            <li className="text">Theme Updates</li>
                            <li className="text">500 GB Disk Space</li>
                            <li className="text">100 Databases List</li>
                            <li className="text">Free Domain Registration</li>
                            <li className="text">1 Hosting Space</li>
                        </ul>
                        <button className="order">ORDER NOW</button>
                    </div>
                    <div className="price">
                        <h2 className="title">VPS</h2>
                        <div className="in_month">
                            <sup>$</sup>
                            <span>1200.00</span>
                            <span className="per_month">Per month</span>
                        </div>
                        <ul className="instructions">
                            <li className="text">Concurrent Domain</li>
                            <li className="text">Theme Updates</li>
                            <li className="text">500 GB Disk Space</li>
                            <li className="text">100 Databases List</li>
                            <li className="text">Free Domain Registration</li>
                            <li className="text">1 Hosting Space</li>
                        </ul>
                        <button className="order">ORDER NOW</button>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Prices