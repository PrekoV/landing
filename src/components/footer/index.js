import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer_wrapper">
                    <ul className="left">
                        <li className="card">€</li>
                        <li className="card">£</li>
                        <li className="card">©</li>
                        <li className="card">®</li>
                        <li className="card">§</li>
                    </ul>
                    <ul className="right">
                        <li className="card">❦</li>
                        <li className="card">♔</li>
                        <li className="card">♘</li>
                        <li className="card">✡</li>
                        <li className="card">☭</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Footer